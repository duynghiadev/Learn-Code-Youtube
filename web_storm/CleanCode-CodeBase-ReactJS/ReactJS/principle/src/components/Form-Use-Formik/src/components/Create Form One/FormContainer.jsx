/**
 * Component này sẽ kết hợp các thành phần trước đó và quản lý trạng thái của form.
 */
// FormContainer.js
import React, { useState } from 'react'
import ApiCaller from './ApiCaller'
import FormComponent from './Form'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập tên')
})

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: ''
  })

  const handleSubmit = (values, { resetForm }) => {
    // Xử lý logic khi submit form
    console.log(values)

    // Reset form sau khi submit thành công
    resetForm()

    // Hiển thị tên vừa submit
    alert(`Bạn vừa submit tên: ${values.name}`)
  }

  const handleDataFetched = (data) => {
    setFormData({
      name: data.length > 0 ? data[0].name : ''
    })
  }

  return (
    <div>
      <ApiCaller onDataFetched={handleDataFetched} />
      <FormComponent
        onSubmit={handleSubmit}
        initialValues={formData}
        validationSchema={validationSchema}
      />
    </div>
  )
}

export default FormContainer
