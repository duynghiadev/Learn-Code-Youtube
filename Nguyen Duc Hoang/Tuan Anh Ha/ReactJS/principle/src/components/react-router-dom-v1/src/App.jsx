/**
 * Dưới đây là một ví dụ đơn giản về cách sử dụng React Router DOM v6, array methods (map, filter), hook, custom hook, Formik, Yup và gọi API miễn phí từ trên mạng. Chú ý rằng mã này chỉ mang tính chất minh họa và có thể cần được điều chỉnh để phù hợp với yêu cầu cụ thể của bạn.
 */
// Import các thư viện và component cần thiết
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import PostDetail from './components/PostDetail'
import AllPosts from './components/AllPosts'
import './App.css' // Import tệp CSS

function App() {
  return (
    <Router>
      <div className='container'>
        {/* Thêm class cho container */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserProfile />} />
          <Route path='/posts' element={<AllPosts />} /> {/* Thêm route cho AllPosts */}
          <Route path='/posts/:postId' element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
