/**
 * Component này sẽ đảm nhiệm việc gọi API từ một nguồn cung cấp dữ liệu miễn phí trên mạng.
 */
/**
 * Trong ví dụ trên, ApiCaller là component chịu trách nhiệm gọi API để lấy dữ liệu. FieldList là component hiển thị danh sách trường input dựa trên dữ liệu từ API. FormComponent chứa form sử dụng Formik và Yup để xác thực các trường input. Cuối cùng, FormContainer là component chứa tất cả các thành phần trước đó và quản lý trạng thái của form.
 */
// ApiCaller.js
import React, { useState, useEffect, useCallback } from 'react'

const ApiCaller = ({ onDataFetched }) => {
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      onDataFetched(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [onDataFetched])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return null
}

export default ApiCaller
