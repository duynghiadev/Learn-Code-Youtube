/**
 * Trong ví dụ này:
 *
 * - UserListOne component sử dụng useEffect để fetch dữ liệu từ API và hiển thị danh sách người dùng.
 * - Mỗi người dùng trong danh sách có một nút để hiển thị/ẩn chi tiết thông tin (UserDetailsOne).
 * - UserDetailsOne component nhận một người dùng thông qua props và có một state để theo dõi việc hiển thị/ẩn chi tiết.
 */
import React, { useState, useEffect } from 'react'
import UserDetailsOne from './UserDetailsOne'

const UserListOne = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Fetch user data from a free API (for example, JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <UserDetailsOne user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserListOne
