import './App.css'
import React, { Component } from 'react'
const ref = React.createRef()
export default class App extends Component {
  componentDidMount() {
    console.log(ref.current)
  }
  render() {
    return (
      <div>
         {/* 使用React.forwardRef包装后的FancyButton就可以添加ref属性了 */}
        <FancyButton ref={ref}>Click me!</FancyButton>
      </div>
    )
  }
}
