// UserForm.jsx
import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom' // Import Link
import './UserForm.css'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
})

const UserForm = () => {
  const initialValues = {
    name: '',
    email: ''
  }

  const handleSubmit = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false })
      // Nếu không có lỗi xác thực, tiếp tục xử lý
      console.log('Form submitted:', values)
    } catch (error) {
      // Log lỗi xác thực ra console
      console.error('Form validation error:', error.errors)
    }
  }

  return (
    <div className='user-form-container'>
      <h2 className='user-form-title'>User Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className='user-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <Field
                type='text'
                id='name'
                name='name'
                className={`form-control ${errors.name && touched.name ? 'field-error' : ''}`}
              />
              {errors.name && touched.name && <div className='error-message'>{errors.name}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <Field
                type='text'
                id='email'
                name='email'
                className={`form-control ${errors.email && touched.email ? 'field-error' : ''}`}
              />
              {errors.email && touched.email && <div className='error-message'>{errors.email}</div>}
            </div>
            {/* Add other form fields here */}
            <button type='submit' className='submit-btn'>
              Submit
            </button>

            {/* Thêm nút để quay lại trang danh sách người dùng */}
            <Link to='/users' className='back-to-list-btn'>
              Back to User List
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserForm
