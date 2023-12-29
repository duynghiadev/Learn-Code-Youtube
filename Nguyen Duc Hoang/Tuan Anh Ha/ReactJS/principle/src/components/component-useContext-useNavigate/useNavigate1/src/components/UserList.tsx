import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const UserList: React.FC = () => {
  const { users } = useUserContext()

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
