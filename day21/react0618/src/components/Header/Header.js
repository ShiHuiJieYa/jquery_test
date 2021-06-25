import React, { useState } from 'react'
import './Header.css'
import PubSub from 'pubsub-js'
export default function Header() {
  // let { getTodoName } = props

  let [todoName, setTodoName] = useState('')
  function fn(e) {
    setTodoName(e.target.value.trim())
  }
  function getTodo(e) {
    //  console.log(1)
    if (e.keyCode === 13) {
      if (!todoName) return
      //把todoname传给app
      PubSub.publish('getTodo', {todoName})
      setTodoName(' ')
    }
  }

  return (
    <div className="todo-header">
      <input type="text" onChange={fn} value={todoName} onKeyUp={getTodo} />
    </div>
  )
}
