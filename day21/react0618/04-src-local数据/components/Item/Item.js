import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  fn(e1, e) {
    this.setState({
      //1.改变了state 2.更新视图
      [e1]: e.target.checked,
    })
  }
  sendId = () => {
    this.props.isChecked(this.props.item.id)
  }

  //删除按钮
  clickDel = () => {
    this.props.delOne(this.props.item.id)
  }
  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            // data-id={item.id}
            checked={item.isDone}
            onChange={(e) => {
              this.fn(item.isDone, e)
            }}
            onClick={this.sendId}
          />
          <span className={item.isDone ? 'done' : ''}>{item.listName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.clickDel}>
          删除
        </button>
      </li>
    )
  }
}
