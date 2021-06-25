import React, {Component} from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    listName: '',
  }
  setListName = (e) => {
    const { listName } = this.state
    if (e.keyCode === 13) {
      if (!listName) return
      this.props.getListName(listName)
      //清空文本框
      this.setState({ listName: '' })
    }
  }
  fn = (e) => {
    this.setState({
      listName: e.target.value.trim(),
    })
  }

  render() {
    const { listName } = this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          value={listName}
          onKeyUp={this.setListName}
          onChange={this.fn}
        />
      </div>
    )
  }
}
