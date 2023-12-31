import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/features/tasks/taskSlice'

const TaskForm = () => {
  const [text, setText] = useState('')
  const dispath = useDispatch()

  const addTaskHandler = (e) => {
    e.preventDefault()
    dispath(addTask(text))
    setText('')
  }

  return (
    <form onSubmit={addTaskHandler}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm
