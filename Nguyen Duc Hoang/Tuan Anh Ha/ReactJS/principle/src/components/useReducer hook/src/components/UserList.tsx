// UserList.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { User, useUsers } from '../hooks/useUsers'
import './UserList.scss' // Import your SCSS file

const UserList: React.FC = () => {
  const { users } = useUsers()

  if (!users) {
    return <div className='user-list-container'>Loading...</div>
  }

  return (
    <div className='user-list-container'>
      <h2>User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
