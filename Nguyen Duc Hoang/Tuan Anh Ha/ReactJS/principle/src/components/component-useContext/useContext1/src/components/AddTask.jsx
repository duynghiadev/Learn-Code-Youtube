/**
 * AddTask.js: Cho phép người dùng thêm công việc mới và sử dụng useState để quản lý trạng thái của biểu mẫu.
 */

// AddTask.js
import React, { useState, useContext } from 'react'
import UserContext from './UserContext'
import './AddTask.css' // Import CSS file for AddTask component

const AddTask = () => {
  const { user } = useContext(UserContext)

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      setError('Please enter a task before adding.')
    } else {
      setTasks([...tasks, newTask])
      setNewTask('')
      setError('')
    }
  }

  return (
    <div className='add-task-container'>
      <h3 className='add-task-title'>Add New Task</h3>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button className='add-task-button' onClick={handleAddTask}>
        Add Task
      </button>

      {error && <p className='error-message'>{error}</p>}

      <div className='user-tasks'>
        <h4>{user}'s Tasks:</h4>
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
