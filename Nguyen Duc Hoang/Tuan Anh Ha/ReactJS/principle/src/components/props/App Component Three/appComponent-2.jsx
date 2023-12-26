/**
 * Trong phiên bản này, initialUsers được mặc định là một mảng trống nếu nó không được truyền vào props. Còn ở phần hiển thị danh sách người dùng ({users && users.map(...)}), chúng ta kiểm tra xem users có giá trị không trước khi sử dụng map. Điều này giúp tránh lỗi khi users là undefined.
 */

import React, { useState, useCallback } from 'react'

const UserList = ({ initialUsers = [] }) => {
  const [users, setUsers] = useState(initialUsers)
  const [newUser, setNewUser] = useState({
    name: '',
    email: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
    console.log('name:', name)
    console.log('value:', value)
  }

  const handleAddUser = useCallback(() => {
    setUsers((prevUsers) => [...prevUsers, newUser])
    setNewUser({
      name: '',
      email: ''
    })
  }, [newUser])

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
      <h2>Add User</h2>
      <div>
        <label>Name:</label>
        <input type='text' name='name' value={newUser.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type='text' name='email' value={newUser.email} onChange={handleInputChange} />
      </div>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default UserList
