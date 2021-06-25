import React, { useState } from 'react'
import './Header.css'
export default function Header(props) {
  let { getTodoName } = props
  let [todoName, setTodoName] = useState('')
  function fn(e) {
    setTodoName(e.target.value.trim())
  }
  function getTodo(e) {
    //  console.log(1)
    if (e.keyCode === 13) {
      if (!todoName) return
      getTodoName(todoName)
      setTodoName('')
    }
  }

  return (
    <div className="todo-header">
      <input type="text" onChange={fn} value={todoName} onKeyUp={getTodo} />
    </div>
  )
}
