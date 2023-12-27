/**
 * Trong ví dụ trên, setNewUserAdded được truyền từ UserList sang AddUser thông qua prop. Khi người dùng thêm một user mới, setNewUserAdded sẽ được gọi để cập nhật trạng thái của newUserAdded trong UserList, từ đó gọi lại useEffect để lấy lại danh sách người dùng với người dùng mới được thêm vào. Đồng thời, phần ghi "User mới" và tên của user mới sẽ xuất hiện trên màn hình.
 */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link to='/add-user'>
        <button>Add User</button>
      </Link>
    </div>
  )
}

export default UserList
