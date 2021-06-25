import { Component } from 'react'
export default class Position extends Component {
  state = {
    x: '',
    y: '',
  }

  handle = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handle)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handle)
  }
  render() {
    return this.props.render(this.state)
  }
}
