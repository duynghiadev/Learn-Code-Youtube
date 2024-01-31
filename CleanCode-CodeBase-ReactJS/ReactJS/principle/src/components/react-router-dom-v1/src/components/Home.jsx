// Home.js

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Home.css' // Import tệp CSS

const Home = () => {
  const [foundUserData, setFoundUserData] = useState(null)

  const formik = useFormik({
    initialValues: {
      userId: ''
    },
    validationSchema: Yup.object({
      userId: Yup.number().typeError('ID phải là một số').required('Vui lòng nhập ID người dùng')
    }),
    onSubmit: async (values) => {
      try {
        // Gọi API để lấy thông tin người dùng dựa trên ID
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${values.userId}`)
        const userData = await response.json()

        // Kiểm tra xem có dữ liệu người dùng hay không
        if (userData.id) {
          setFoundUserData(userData)
        } else {
          // Nếu không tìm thấy người dùng, đặt dữ liệu người dùng thành null
          setFoundUserData(null)
        }
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
        // Xử lý lỗi nếu cần thiết
      }
    }
  })

  return (
    <div className='home-container'>
      <h1 className='home-header'>Trang chủ</h1>
      <p className='home-description'>Sử dụng Formik và Yup để nhập ID người dùng:</p>

      {/* Form tìm kiếm người dùng */}
      <form onSubmit={formik.handleSubmit} className='search-form'>
        <label htmlFor='userId'>Nhập ID người dùng:</label>
        <input
          type='text'
          id='userId'
          name='userId'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
        />
        {formik.touched.userId && formik.errors.userId ? (
          <div className='error'>{formik.errors.userId}</div>
        ) : null}
        <button type='submit'>Tìm kiếm</button>
      </form>

      {/* Hiển thị thông tin người dùng khi tìm kiếm thành công */}
      {foundUserData && (
        <div className='found-user'>
          <h2 className='found-user-header'>Thông tin người dùng</h2>
          <p>ID: {foundUserData.id}</p>
          <p>Tên: {foundUserData.name}</p>
          <p>Email: {foundUserData.email}</p>
          {/* Thêm các thông tin khác cần hiển thị */}
        </div>
      )}

      {/* Nút chuyển đến trang danh sách người dùng */}
      <Link to='/users'>
        <button className='home-button'>Xem tất cả người dùng</button>
      </Link>

      {/* Nút chuyển đến trang xem tất cả bài viết */}
      <Link to='/posts'>
        <button className='home-button'>Xem tất cả bài viết</button>
      </Link>
    </div>
  )
}

export default Home
