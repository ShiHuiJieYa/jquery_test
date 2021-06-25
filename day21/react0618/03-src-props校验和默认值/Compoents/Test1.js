// 受控组件: 组件中的表单项被组件的状态控制
import React, { Component } from 'react'

export default class Test1 extends Component {
  state = {
    username: '123',
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            // 用户输入时触发
            // 拿到用户输入的值,然后修改state
            // console.log(e.target.value)
            this.setState({
              username: e.target.value,
            })
          }}
        />
      </div>
    )
  }
}
