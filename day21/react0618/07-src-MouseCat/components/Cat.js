import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'
export default class Cat extends Component {
  render() {
    let { x, y } = this.props.data
    x += 500
    
    return (
      <>
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </>
    )
  }
}
