/**
 * TaskList.js: Hiển thị danh sách công việc và sử dụng useContext để lấy thông tin người dùng.
 */
// TaskList.js
import React, { useContext, useState, useEffect } from 'react'
import UserContext from './UserContext'
import './TaskList.css' // Import CSS file for TaskList component

const TaskList = () => {
  const { user } = useContext(UserContext)
  const [userData, setUserData] = useState(null)
  const [isUserDataVisible, setIsUserDataVisible] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [])

  const handleToggleUserData = () => {
    setIsUserDataVisible((prev) => !prev)
  }

  return (
    <div className='task-list-container'>
      <h2 className='task-list-title'>{user}'s Task List</h2>

      {userData && (
        <div className='user-data-container'>
          {isUserDataVisible ? (
            <div>
              <h3 className='user-data'>User Data:</h3>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
            </div>
          ) : (
            <p>User data is hidden.</p>
          )}
        </div>
      )}

      <button className='hide-button' onClick={handleToggleUserData}>
        {isUserDataVisible ? 'Hide User Data' : 'Show User Data'}
      </button>
    </div>
  )
}

export default TaskList
