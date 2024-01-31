import React from 'react'
import useUserList from './hooks/useUserList'
import AddUserForm from './components/AddUserForm'
import UserList from './components/UserList'
import './App.scss'

const App: React.FC = () => {
  const { users, addUser, deleteUser, editUser } = useUserList()

  return (
    <div className='app-container'>
      <h1>User Management App</h1>
      <AddUserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
    </div>
  )
}

export default App
