// UserList.jsx
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './UserList.css' // Import file CSS

const UserList = () => {
  const [users, setUsers] = useState([])

  console.log('users from component UserList:', users)

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleUserClick = (user) => {
    console.log('Selected User:', user)
  }

  return (
    <div className='user-list-container'>
      <h2 className='user-list-title'>User List</h2>
      <ul className='user-list'>
        {users.map((user) => (
          <li key={user.id} className='user-list-item'>
            {/* Thêm sự kiện onClick để gọi hàm xử lý khi nhấp vào người dùng */}
            <Link
              to={`/users/${user.id}`}
              className='user-link'
              onClick={() => handleUserClick(user)}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to='/users/new' className='add-user-link'>
        Add New User
      </Link>
    </div>
  )
}

export default UserList
