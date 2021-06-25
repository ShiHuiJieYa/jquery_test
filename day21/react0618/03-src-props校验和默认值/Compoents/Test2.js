// 受控组件: 组件中的表单项被组件的状态控制
import React, { Component } from 'react'

export default class Test2 extends Component {
  state = {
    pwd: '***',
    info: '123',
    value: 'hitdd',
  }
  fn = (e1, e) => {
    let value =
      e.target.nodeName === 'CHECKBOX' ? e.target.checked : e.target.value
    this.setState({
      //如果不加中括号 直接当成属性值就是e1  但其实要的是e1这个变量里面的值 所以加上中括号
      //e1就变成了变量
      [e1]: value,
    })
  }
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.pwd}
          onChange={
            //onChange里面写的是一个回调函数
            (e) => {
            // 用户输入时触发
            // 拿到用户输入的值,然后修改state
            // console.log(e.target.value)
            this.fn('pwd', e)
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={(e) => {
            // this.setState({
            //   info: e.target.value,
            // })
            this.fn('info', e)
          }}
        ></textarea>
        <select
          value={this.state.value}
          onChange={(e) => {
            // this.setState({
            //   value: e.target.value,
            // })
            this.fn('value', e)
          }}
        >
          <option value="eat">吃饭</option>
          <option value="sleep">睡觉</option>
          <option value="hitdd">打豆豆</option>
        </select>
      </div>
    )
  }
}
