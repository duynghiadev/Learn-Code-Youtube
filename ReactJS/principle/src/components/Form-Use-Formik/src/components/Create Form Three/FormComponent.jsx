/**
 * Dưới đây là một phiên bản cải thiện hơn của đoạn mã, với việc thêm vào một số tính năng và mô-đun để làm cho mã trở nên phức tạp hơn. Chúng ta sẽ thêm một số trường mới vào form, thêm xác thực phức tạp hơn và sử dụng useState và useCallback một cách chi tiết hơn:
 */
// FormComponent.js
// FormComponent.js
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormComponent = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      age: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      age: Yup.number()
        .typeError('Age must be a number')
        .required('Age is required')
        .positive('Age must be positive')
    }),
    onSubmit: (values) => {
      onSubmit(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: 'red' }}>{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          id='age'
          name='age'
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div style={{ color: 'red' }}>{formik.errors.age}</div>
        ) : null}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormComponent
