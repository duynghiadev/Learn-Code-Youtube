import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../redux/features/tasks/taskSlice'
import { useState } from 'react'

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.text)

  const dispatch = useDispatch()

  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id))
  }

  const saveChanges = (e) => {
    e.preventDefault()
    const newTask = {
      id: task.id,
      text: editValue
    }
    dispatch(updateTask(newTask))
    setIsEditing(false)
  }

  return isEditing ? (
    <form onSubmit={saveChanges}>
      <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      <button type='submit'>Save Changes</button>
      <button onClick={(e) => setIsEditing(false)}>Cancel</button>
    </form>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </div>
  )
}

export default Task
