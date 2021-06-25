import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Item from './components/Item/Item'
import Footer from './components/Footer/Footer'
import PubSub from 'pubsub-js'
import './App.css'
export default function App() {
  let todos = JSON.parse(localStorage.getItem('todos'))
  if (!todos) {
    todos = []
  }
  let [list, setList] = useState(todos)
  PubSub.publish('todos', { list })
  let allList = list.length
  let allChecked = list.filter((item) => {
    return item.isDone
  }).length

  //点击checked按钮
  function getId(obj) {
    let newList
    if (obj.type === 'update') {
      newList = [...list]
      newList.forEach((item) => {
        if (item.id === obj.id) {
          item.isDone = !item.isDone
        }
      })
    } else if (obj.type === 'delete') {
      newList = list.filter((item) => {
        return item.id !== obj.id
      })
    }
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function setTodoName(todoName) {
    // console.log('gettodoname')
    if (!todoName) return
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let obj = {
      id,
      todoName,
      isDone: false,
    }
    let newList = [...list]
    newList.push(obj)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }
  let promise
  useEffect(async () => {
    promise = new Promise((resolve) => {
      PubSub.subscribe('getTodo', (topic, data) => {
        resolve(data)
      })
    })
    let { todoName, idObj } = await promise
    setTodoName(todoName)

    return () => {}
  }, [])

  //删除已完成
  function delAllChecked() {
    let newList = list.filter((item) => !item.isDone)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  //点击全选按钮
  function updateAll(checked) {
    let newList = list.map((item) => {
      item.isDone = !checked
      return item
    })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>
            {list.map((item) => (
              <Item key={item.id} item={item} getId={getId}></Item>
            ))}
          </List>
          <Footer
            allList={allList}
            allChecked={allChecked}
            delAllChecked={delAllChecked}
            updateAll={updateAll}
          ></Footer>
        </div>
      </div>
    </div>
  )
}
