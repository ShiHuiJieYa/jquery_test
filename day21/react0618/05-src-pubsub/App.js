import React, {Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import PubSub from 'pubsub-js'
import './App.css'
export default class App extends Component {
  //定义一个得到listName的函数
  getListName = (data) => {
    const { list } = this.state

    //id等于最后一个元素id+1，如果为空就直接id为1
    let id = list.length ? list[list.length - 1].id + 1 : 1
    const newList = [...list]
    newList.push({ id, listName: data, isDone: false })
    //还要再把原来state里面的list替换成新list
    this.setState({ list: newList })
  }
  //是否选中
  isChecked = (id) => {
    // console.log(1)
    const { list } = this.state
    let newList = [...list]
    newList.forEach((item) => {
        if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list: newList,
    })
  }

  //是否点击全选按钮
  isAllChecked = () => {
    //直接判断当前的input是否为全部选中，如果是全部选中，说明现在全选按钮时选中
    //点击全选就是要把所有的input为不选择状态
    //反之亦然
    const { list } = this.state
    let newList = [...list]
    let re = newList.every((item) => item.isDone) //直接判断当前的input是否为全部选中
    //re为true则全选按钮未点击之前是选中状态，点击之后把input都改为未选中 直接取反
    newList.forEach((item) => {
      item.isDone = !re
    })
    //把改过的list重新设置给state
    this.setState({ list: newList })
  }

  //删除已完成按钮，判断那些是已选中的排除然后返回新list代替原来的list
  delAllChecked = () => {
    const { list } = this.state
    let newList = list.filter((item) => !item.isDone)
    this.setState({
      list: newList,
    })
  }

  //删除按钮
  delOne = (id) => {
    let { list } = this.state
    let newList = list.filter((item) => {
      return item.id !== id
    })
    this.setState({ list: newList })
  }
  state = {
    list: [
      {
        id: 1,
        listName: '吃饭',
        isDone: true,
      },
      {
        id: 2,
        listName: '睡觉',
        isDone: true,
      },
      {
        id: 3,
        listName: '打豆豆',
        isDone: false,
      },
    ],
  }
  //更新之后才会执行，不更新不执行
  //   shouldComponentUpdate(nextProps,nextState) {
  // if(this.)
  //   }
  render() {
    let { list } = this.state
    // console.log(list)
    let checkedList = list.reduce((preValue, item) => {
      return item.isDone ? preValue + 1 : preValue
    }, 0)
    let allList = list.length
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getListName={this.getListName}></Header>
          {list.length ? (
            <div>
              <List list={this.state.list}></List>
              <Footer
                allList={allList}
                checkedList={checkedList}
                isAllChecked={this.isAllChecked}
                delAllChecked={this.delAllChecked}
              ></Footer>
            </div>
          ) : (
            <h2>恭喜你，没有任务要完成哦！</h2>
          )}
        </div>
      </div>
    )
  }
  componentDidMount() {
    let re = localStorage.getItem('todo')
    let todo = JSON.parse(re)
    todo && this.setState({ list: todo })
    PubSub.subscribe('id', (topic, obj) => {
      if (obj.type === 'update') {
        this.isChecked(obj.id)
      } else if (obj === 'delete') {
        this.delOne(obj.id)
      }
    })
  }
  componentDidUpdate() {
    let { list } = this.state
    let newStr = JSON.stringify(list)
    localStorage.setItem('todo', newStr)
  }
}
