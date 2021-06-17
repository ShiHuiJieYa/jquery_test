import React from 'react'
export default class Count extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      msg: '哈哈',
      data: [1, 2, 3],
    }
  }
  render() {
    return (
      <div>
        <div style={{ color: 'red' }}>{this.state.count}</div>
        <div>{this.state.msg}</div>
            <div>{this.state.data}</div>
            <button className="btn"></button>
      </div>
    )
  }
}
