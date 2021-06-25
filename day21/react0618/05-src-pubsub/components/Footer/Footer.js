import React, { Component } from 'react'
// import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {
  // fn = () => {
  // const { list } = this.props
  // let newList = [...list]
  // let re = newList.reduce((preValue, item) => {
  //   return item.isDone ? preValue + 1 : preValue
  // }, 0)

  // return re
  // }
  // isClick = (e) => {
  //   this.props.isAllChecked(e.target.checked)
  // }
  state = {
    checked: '',
  }
  fn = (e) => {
    this.setState({ checked: e.target.checked })
  }

  //删除已完成任务
  clickAllChecked = () => {
    this.props.delAllChecked()
  }
  render() {
    const { allList, checkedList } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={checkedList === allList}
            onChange={this.fn}
            onClick={this.props.isAllChecked}
          />
        </label>
        <span>
          <span>已完成 {checkedList}</span> / 全部 {allList}
        </span>
        <button className="btn btn-danger" onClick={this.clickAllChecked}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
