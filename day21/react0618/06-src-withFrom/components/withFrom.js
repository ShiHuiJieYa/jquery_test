import React from 'react'
export default function withForm(WrappedComponent) {
  return class extends React.Component {
    state = {
      userName: '',
      password: '',
      rePassword: '',
    }
    fn = (type) => {
      return (e) => {
        this.setState({
          [type]: e.target.value,
        })
      }
    }
    render() {
      return <WrappedComponent {...this.state} fn={this.fn}></WrappedComponent>
    }
  }
}
