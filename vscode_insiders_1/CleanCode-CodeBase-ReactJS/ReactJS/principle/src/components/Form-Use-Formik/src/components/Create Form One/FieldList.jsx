/**
 * Component này sẽ hiển thị danh sách trường input dựa trên dữ liệu từ API.
 */
// FieldList.js
import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FieldList = ({ user }) => {
  return (
    <div>
      <label htmlFor='name'>Name:</label>
      <Field type='text' id='name' name='name' />
      <ErrorMessage name='name' component='div' />
    </div>
  )
}

export default FieldList
