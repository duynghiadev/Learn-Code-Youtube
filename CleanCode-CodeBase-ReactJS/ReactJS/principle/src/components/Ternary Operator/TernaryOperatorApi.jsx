/**
 * Dưới đây là một ví dụ đơn giản trong React sử dụng các hook như useState, useEffect, useCallback, và các array method để gọi một API miễn phí từ JSONPlaceholder (https://jsonplaceholder.typicode.com).
 */
/**
 * Trong ví dụ này:
 *
 * useState được sử dụng để quản lý state (data, loading, error).
 * useEffect được sử dụng để gọi hàm fetchData khi component được render.
 * useCallback được sử dụng để bảo vệ khỏi việc tạo lại hàm fetchData, filterData, và handleFilterChange mỗi khi component render lại.
 * Các array method như filter được sử dụng để lọc dữ liệu dựa trên từ khóa nhập vào.
 */
/**
 * Trong ví dụ này:
 *
 * SearchBar component nhận prop onFilterChange và gọi nó khi giá trị thay đổi.
 * ApiExample truyền hàm handleFilterChange xuống SearchBar thông qua prop onFilterChange.
 * PostList và ErrorDisplay nhận dữ liệu thông qua props.
 * Bằng cách này, code được chia thành các component nhỏ hơn, dễ quản lý và tái sử dụng hơn.
 */

// TernaryOperatorApi.js
import React, { useState, useEffect, useCallback } from 'react'
import TernaryOperatorSearchBar from './ternaryOperatorSearchBar'
import TernaryOperatorError from './ternaryOperatorError'
import TernaryOperatorPostList from './ternaryOperatorPostList'

const TernaryOperatorApi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState([])

  console.log('data:', data)
  console.log('error:', error)
  console.log('filteredData:', filteredData)

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const result = await response.json()
      setData(result)
      setFilteredData(result.slice(0, 10)) // Ban đầu, hiển thị 10 bài post đầu tiên
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const filterData = useCallback(
    (keyword) => {
      if (!keyword) {
        return data
      }
      return data.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()))
    },
    [data]
  )

  const handleFilterChange = useCallback(
    (keyword) => {
      if (!keyword) {
        setFilteredData(data.slice(0, 10)) // Reset danh sách khi keyword rỗng
      } else {
        const filteredData = filterData(keyword)
        setFilteredData(filteredData)
      }
    },
    [filterData, data]
  )

  return (
    <div>
      <h1>API Example</h1>
      <TernaryOperatorSearchBar onFilterChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <TernaryOperatorError error={error} />
      ) : filteredData.length === 0 ? (
        <p>Không tìm thấy dữ liệu</p>
      ) : (
        <TernaryOperatorPostList data={filteredData} />
      )}
    </div>
  )
}

export default TernaryOperatorApi
