import React from 'react'
export default class Count extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈',
      data: [1, 2, 3],
    }
  }
  render() {
    return <div style={{ color: 'red' }}>{this.props.count}</div>
  }
}
