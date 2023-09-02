import React, { Component } from 'react'
import classNames from 'classnames'
import './ToDoItem.scss'

export default class ToDoItem extends Component {
  render() {
    const {
      item: { id, title, isDone },
      onRemove,
      onEdit,
      onComplete,
      isEditing
    } = this.props

    const className = classNames({
      todo__item: true,
      editing: isEditing && isEditing === id,
      disabled: isEditing && isEditing !== id,
      completed: isDone
    })

    return (
      <div className='ToDoItem col-12'>
        <div className={className} tabIndex='0'>
          <div className='todo__item--content'>{title}</div>
          <div className='todo__item--actions'>
            <div
              className='icon icon__remove'
              title='Remove'
              tabIndex='0'
              onClick={!isEditing ? onRemove(id) : undefined}
            ></div>
            <div className='icon icon__edit' title='Edit' tabIndex='0' onClick={onEdit(id)}></div>
            <div
              className='icon icon__complete'
              title='Complete'
              tabIndex='0'
              onClick={!isEditing ? onComplete(id) : undefined}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}
