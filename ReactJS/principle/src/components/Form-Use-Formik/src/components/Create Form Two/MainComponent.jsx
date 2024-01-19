/**
 * Để thực hiện ví dụ này, chúng ta sẽ tạo ra một ứng dụng React đơn giản có chức năng tạo và xác thực một form sử dụng các thư viện như Formik, Yup, useState, useCallback và gọi API (sử dụng một API miễn phí trên mạng). Ví dụ này sẽ chia thành 4 thành phần chính:
 *
 * FormComponent: Đây là thành phần chứa form để nhập thông tin.
 * ValidationSchema: Đây là thành phần chứa schema xác thực của Yup.
 * ApiCallComponent: Đây là thành phần sử dụng useEffect và useCallback để gọi API khi form được submit.
 * MainComponent: Đây là thành phần chính kết hợp tất cả các thành phần trên.
 */
// MainComponent.js
import React, { useState } from 'react'
import FormComponent from './FormComponent'
import ValidationSchema from './ValidationSchema'
import ApiCallComponent from './ApiCallComponent'

const MainComponent = () => {
  const [formData, setFormData] = useState(null)

  const handleSubmit = (values) => {
    // Xác thực dữ liệu sử dụng Yup
    ValidationSchema.validate(values)
      .then(() => {
        // Nếu dữ liệu hợp lệ, setFormData và gọi API
        setFormData(values)
      })
      .catch((error) => {
        console.error('Validation Error:', error.errors)
      })
  }

  return (
    <div>
      <h1>React Form with Yup Validation and API Call</h1>
      <FormComponent onSubmit={handleSubmit} />
      <ApiCallComponent formData={formData} />
    </div>
  )
}

export default MainComponent
