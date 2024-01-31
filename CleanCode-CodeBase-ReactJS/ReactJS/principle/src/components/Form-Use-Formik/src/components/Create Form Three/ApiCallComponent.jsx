// ApiCallComponent.js
import React, { useEffect, useCallback } from 'react'

const ApiCallComponent = ({ formData }) => {
  const fetchData = useCallback(async () => {
    try {
      // Gọi API sử dụng fetch hoặc axios
      // Trong ví dụ này, chúng ta không gọi API để đơn giản hóa mẫu
      console.log('API Called with data:', formData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [formData])

  useEffect(() => {
    if (formData) {
      fetchData()
    }
  }, [formData, fetchData])

  return <div>API Call Component</div>
}

export default ApiCallComponent
