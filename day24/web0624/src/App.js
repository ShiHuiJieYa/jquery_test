import './App.css'
import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home" activeClassName="done">
          home
        </NavLink>
        <br />
        <NavLink to="/detail" activeClassName="done">
          detail
        </NavLink>
        <br />
        <NavLink to="/a" activeClassName="done">
          Redirect
        </NavLink>
        <Switch>
          {/* Switch组件用于包裹Route组件,类似于js中的switch,有一个Route符合就不往下匹配了 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Redirect from="/a" to="/home"></Redirect>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    )
  }
}
