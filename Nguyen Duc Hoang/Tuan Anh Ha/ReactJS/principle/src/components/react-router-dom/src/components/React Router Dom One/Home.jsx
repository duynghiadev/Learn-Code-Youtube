/**
 * Trong ví dụ trên, chúng ta đã tạo một component Home để hiển thị nội dung chào mừng và một nút Go to User List để chuyển hướng đến trang UserList. Sau đó, trong component App, chúng ta đã thêm một liên kết trong thanh điều hướng để điều hướng đến trang Home và đã cập nhật Routes để bao gồm Home như là một trang chính.
 */
// Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' // Import file CSS

const Home = () => {
  return (
    <div className='home-container'>
      <h2 className='home-title'>Welcome to Home</h2>
      <p className='home-description'>This is the home page of the application.</p>
      <Link to='/users' className='go-to-list-btn'>
        Go to User List
      </Link>
    </div>
  )
}

export default Home
