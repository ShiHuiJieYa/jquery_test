import React from 'react'
import Count from './compoents/count/count'
import Text from './compoents/text'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 3,
    }
  }
  render() {
    return (
      <div>
        <Count count={this.state.count}></Count>
        <Text count={this.state.count}></Text>
      </div>
    )
  }
}
export default App
