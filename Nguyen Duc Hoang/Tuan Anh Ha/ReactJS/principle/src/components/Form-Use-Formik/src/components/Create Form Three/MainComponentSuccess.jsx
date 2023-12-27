/**
 * Trong ví dụ này, chúng ta đã thêm các trường mới vào form và áp dụng xác thực phức tạp hơn sử dụng Yup. Đồng thời, ApiCallComponent vẫn sử dụng useEffect và useCallback để mô phỏng việc gọi API.
 */
// MainComponentSuccess.js
import React, { useState } from 'react'
import FormComponent from './FormComponent'
import ValidationSchema from './ValidationSchema'
import ApiCallComponent from './ApiCallComponent'

const MainComponentSuccess = () => {
  const [formData, setFormData] = useState(null)

  const handleSubmit = (values) => {
    // Xác thực dữ liệu sử dụng Yup
    ValidationSchema.validate(values, {
      abortEarly: false
    })
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
      <h1>Advanced React Form with Yup Validation and API Call</h1>
      <FormComponent onSubmit={handleSubmit} />
      <ApiCallComponent formData={formData} />
    </div>
  )
}

export default MainComponentSuccess
