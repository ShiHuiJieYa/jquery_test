import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    let { userName, fn, password } = this.props
    return (
      <>
        <h1>登录页面</h1>
        用户名：
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={fn('userName')}
        />
        <span></span>
        <br />
        密码：
        <input
          type="password"
          name="password"
          value={password}
          onChange={fn('password')}
        />
        <span></span>
        <br />
        <input type="submit" value="登录" name="login" />
      </>
    )
  }
}
