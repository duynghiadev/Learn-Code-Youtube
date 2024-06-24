/**
 * Dưới đây là một ví dụ về cách sử dụng useRef, useState, và useEffect trong React để tạo một ứng dụng đơn giản với form để xem danh sách và thêm người dùng mới. Trong ví dụ này, chúng ta sẽ sử dụng JSONPlaceholder, một API HTTP fake để thực hiện các yêu cầu API.
 */
/**
 * Sau đó, truy cập ứng dụng của bạn. Bạn sẽ thấy danh sách người dùng và có thể thêm người dùng mới bằng cách chuyển đến trang "Add User".
 */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import AddUser from './components/AddUser'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </Router>
  )
}

export default App
