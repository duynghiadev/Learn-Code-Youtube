// UserDetail.jsx
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserDetail.css' // Import file CSS

const UserDetail = () => {
  const [user, setUser] = useState(null)
  const { userId } = useParams()

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.error('Error fetching user details:', error)
    }
  }, [userId])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <div className='user-detail-container'>
      <h2 className='user-detail-title'>User Detail</h2>
      {user ? (
        <div className='user-details'>
          <p>
            <span className='detail-label'>Name:</span> {user.name}
          </p>
          <p>
            <span className='detail-label'>Email:</span> {user.email}
          </p>
          {/* Add other user details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to='/users' className='back-to-list-btn'>
        Back to User List
      </Link>
    </div>
  )
}

export default UserDetail
