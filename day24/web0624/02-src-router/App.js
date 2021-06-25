import './App.css'
import React, { Component } from 'react'
import { Route ,Link} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default class App extends Component {
 
  render() {
    return (
      <div>
        <Link to='/home'>home</Link>
        <br />
        <Link to='/detail'>detail</Link>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
      </div>
    )
  }
}
