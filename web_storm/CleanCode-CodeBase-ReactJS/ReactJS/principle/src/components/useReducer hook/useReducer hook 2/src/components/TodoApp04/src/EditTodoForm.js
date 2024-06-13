import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './context/todos.context'

function EditTodoForm({ id, task, toggleEditing }) {
  const [value, handleChange, reset] = useInputState(task)
  const dispatch = useContext(DispatchContext)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        dispatch({ type: 'UPDATE', id: id, newTask: value })
        reset()
        toggleEditing()
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField value={value} onChange={handleChange} margin='normal' fullWidth autoFocus />
    </form>
  )
}

export default EditTodoForm
