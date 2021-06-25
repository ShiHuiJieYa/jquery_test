import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import withForm from './components/withFrom'
let LoginWith=withForm(Login)
const RegisterWith = withForm(Register)
export default class App extends Component {
  render() {
    return (
      <>
        <LoginWith></LoginWith>
        <RegisterWith></RegisterWith>
      </>
    )
  }
}
