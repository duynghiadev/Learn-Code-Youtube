import React, { Component } from 'react'
import './ToDoStatus.scss'

export default class ToDoStatus extends Component {
  render() {
    const { scale, percentage } = this.props
    return (
      <div className='ToDoStatus'>
        <div className='todo__status todo__status--done col'>
          Todo {scale === 'done' ? 'Done' : 'On Process'}: {percentage}%
        </div>
      </div>
    )
  }
}
