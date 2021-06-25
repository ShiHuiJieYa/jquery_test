import React from 'react'
// import Pubsub from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  let { allChecked, allList, delAllChecked, updateAll } = props
  function fn() {
    updateAll(allChecked === allList)
  }
  return allList ? (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={allChecked === allList} onChange={fn} />
      </label>
      <span>
        <span>已完成 {allChecked}</span> / 全部 {allList}
      </span>
      <button className="btn btn-danger" onClick={delAllChecked}>
        清除已完成任务
      </button>
    </div>
  ) : (
    <h1>恭喜你，没有要完成的任务</h1>
  )
}
