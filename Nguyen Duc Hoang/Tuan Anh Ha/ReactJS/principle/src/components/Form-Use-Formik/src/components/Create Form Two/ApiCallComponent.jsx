// ApiCallComponent.js
import React, { useEffect, useCallback } from 'react'

const ApiCallComponent = ({ formData }) => {
  console.log('Api call')
  const fetchData = useCallback(async () => {
    try {
      // Gọi API sử dụng fetch hoặc axios
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = await response.json()
      console.log('API Response:', data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])

  useEffect(() => {
    if (formData) {
      fetchData()
    }
  }, [formData, fetchData])

  return <div>API Call Component</div>
}

export default ApiCallComponent
