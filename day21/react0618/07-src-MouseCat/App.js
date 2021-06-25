import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './components/Position'
export default class App extends Component {
  render() {
    return (
      <>
        <Position render={(data) => <Cat data={data}></Cat>}></Position>
        <Position render={(data) => <Mouse data={data}></Mouse>}></Position>
      </>
    )
  }
}
