import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Users.css' // Import tệp CSS

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Gọi API miễn phí từ trên mạng (ví dụ: JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className='users-container'>
      <h2 className='users-header'>Danh sách người dùng</h2>
      <ul className='users-list'>
        {users.map((user) => (
          <li key={user.id} className='user-item'>
            <Link to={`/users/${user.id}`} className='user-link'>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Nút quay về trang chủ */}
      <Link to='/'>
        <button className='back-button'>Quay về trang chủ</button>
      </Link>
    </div>
  )
}

export default Users
