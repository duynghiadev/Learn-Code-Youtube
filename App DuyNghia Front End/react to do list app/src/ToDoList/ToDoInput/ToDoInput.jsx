import React, { Component, createRef } from 'react'
import './ToDoInput.scss'

export default class ToDoInput extends Component {
  constructor(props) {
    super(props)

    this.inputRef = createRef()
  }
  render() {
    const { inputText, onChange, onAdd, isEditing } = this.props
    return (
      <form className='ToDoInput' onSubmit={onAdd}>
        <input
          autoFocus
          type='text'
          ref={this.inputRef}
          value={inputText}
          onChange={onChange}
          placeholder='What is your next task?'
        />
        <button type='submit' className='btn__add'>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>
    )
  }
}
