import React from 'react'
import Count from './compoents/count/count'
import Text from './compoents/text'
import List from './compoents/list'
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
        <Text aa={'hh'}></Text>
        
      </div>
    )
  }
}
export default App
