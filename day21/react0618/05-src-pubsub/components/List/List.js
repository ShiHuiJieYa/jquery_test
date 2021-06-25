import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  // sendAId = (id,checked) => {
  //   this.props.isChecked(id,checked)
  // }
  render() {
    // PubSub.subscribe('list', function (topic, data) {
    //   this.setState({
    //     list: data,
    //   })
    // })
    const { list } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => (
          <Item
            key={item.id} //key这个属性名是特定的  子元素是无法通过props得到key的值
            item={item}
          ></Item>
        ))}
      </ul>
    )
  }
}
