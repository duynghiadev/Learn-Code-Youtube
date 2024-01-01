/**
 * Dưới đây là một ví dụ về việc sử dụng TypeScript để tạo một custom hook và ứng dụng đơn giản gồm 5 components. Trong ví dụ này, chúng ta sẽ tạo một custom hook để quản lý state của một danh sách người dùng và sử dụng nó trong 5 components để thêm, xóa và hiển thị danh sách người dùng.
 */
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
      <AddUserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  )
}

export default App
