/**
 * Dưới đây là một ví dụ phức tạp hơn với ba components: UserListTwo, UserDetailsTwo, và UserFormTwo. Trong ví dụ này, UserListTwo hiển thị danh sách người dùng, UserDetailsTwo hiển thị chi tiết người dùng và cho phép người dùng xem/ẩn thông tin chi tiết, và UserFormTwo cho phép thêm người dùng mới vào danh sách.
 */
/**
 * Trong ví dụ này:
 *
 * - UserList chứa danh sách người dùng và component UserForm để thêm người dùng mới.
 * - UserDetails cho phép hiển thị chi tiết người dùng và xem/ẩn thông tin chi tiết.
 * - UserForm là một form để thêm người dùng mới vào danh sách và gọi hàm addUser từ UserList.
 */
// UserListTwo.js
import React, { useState, useEffect } from 'react'
import UserFormTwo from './UserFormTwo'
import UserDetailsTwo from './UserDetailsTwo'

const UserListTwo = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Fetch user data from a fake API with only 5 users
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // Assuming we only want the first 5 users
        const firstFiveUsers = data.slice(0, 5)
        setUsers(firstFiveUsers)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const addUser = (newUser) => {
    console.log('newUser from parent:', newUser)
    setUsers([...users, newUser])
  }

  return (
    <div>
      <h2>User List</h2>
      <UserFormTwo addUser={addUser} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <UserDetailsTwo user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserListTwo
