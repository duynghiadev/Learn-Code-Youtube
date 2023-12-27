/**
 * Component này sẽ chứa form sử dụng Formik và Yup để xác thực các trường input.
 */
// Form.js
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import FieldList from './FieldList'

const FormComponent = ({ onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <FieldList users={initialValues.users} />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormComponent
