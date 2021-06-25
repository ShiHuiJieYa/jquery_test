import React, { Component } from 'react'
export default class Register extends Component {
  render() {
    let { userName, fn, password ,rePassword} = this.props
    return (
      <>
        <h1>注册页面</h1>
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
        确认密码：
        <input
          type="password"
          name="rePassword"
          value={rePassword}
          onChange={fn('rePassword')}
        />
        <span></span>
        <br />
        <input type="submit" value="注册" name="register" />
      </>
    )
  }
}
