// UserList.tsx
import React, { useContext } from 'react'
import { UserListContext } from '../reducers/UserListProvider'
import './UserList.scss'

const UserList: React.FC = () => {
  const context = useContext(UserListContext)

  if (!context) {
    return <div>Error: UserListContext is undefined</div>
  }

  const { state } = context

  if (state.loading) {
    return <div>Loading...</div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>
  }

  return (
    <div className='user-list'>
      <h2 className='user-list__title'>User List</h2>
      <ul className='user-list__list'>
        {state.users.map((user) => (
          <li key={user.id} className='user-list__item'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
