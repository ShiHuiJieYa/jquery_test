import React, {} from 'react'
// import Item from '../Item/Item'
import './List.css'
export default function List(props) {
  return <ul className="todo-main">{props.children}</ul>
}
