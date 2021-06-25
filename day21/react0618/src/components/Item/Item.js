import React from 'react'
import './Item.css'
export default function Item() {
  // let { item, getId } = props
  // let { checked, setChecked } = useState('')
  function cChecked() {
    // setChecked(item.isDone)
    // getId({ id: item.id, type: 'update' })
    PubSub.publish('getTodo', { idObj: { id: item.id, type: 'update' } })
  }
  // function sendId() {
  //   isDone(item.id)
  // }

  function delOne() {
    // getId()
    PubSub.publish('getTodo', { idObj: { id: item.id, type: 'delete' } })
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={cChecked}
          // onClick={sendId}
        />
        <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
      </label>
      <button className="btn btn-danger" onClick={delOne}>
        删除
      </button>
    </li>
  )
}
