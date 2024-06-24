/**
 * TaskListsContainer.js: Component chứa danh sách công việc cho mỗi người dùng.
 */
import React, { useContext } from 'react'
import UserContext from './UserContext'
import TaskList from './TaskList'
import './TaskListsContainer.css' // Import file CSS chứa styles

const TaskListsContainer = () => {
  const users = useContext(UserContext)

  return (
    <div className='task-lists-container'>
      {console.log('user from components TaskListsContainer:', users)}
      {users.map((user, index) => (
        <TaskList key={index} user={user} />
      ))}
    </div>
  )
}

export default TaskListsContainer
