/**
 * AddTask.js: Component cho phép người dùng thêm công việc và sử dụng Context để biết người dùng đang thêm công việc cho ai.
 */
import React, { useState, useContext } from 'react'
import UserContext from './UserContext'
import './AddTask.css' // Import file CSS chứa styles

const AddTask = () => {
  const user = useContext(UserContext)
  console.log('user from components AddTask:', user)

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Please enter a task before adding.')
      return
    }

    setTasks([...tasks, newTask])
    setNewTask('')
    setError('')
  }

  return (
    <div className='add-task-container'>
      <h3>Add New Task for {user}</h3>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Enter your task here'
      />
      {error && <p className='error-message'>{error}</p>}

      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <h4>Tasks:</h4>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AddTask
