/**
 * Dưới đây là một ví dụ về một function component phức tạp sử dụng useState và useEffect trong React:
 */
/**
 * Trong ví dụ này:
 *
 * - Sử dụng useState để quản lý state (count, data, loading, error).
 * - Sử dụng useEffect để thực hiện các tác vụ liên quan đến lifecycle:
 *   - Fetch dữ liệu từ API khi component được mount và cập nhật state (data, loading, error).
 *   - Log thông điệp khi count thay đổi.
 *   - Log thông điệp khi component mount và thực hiện cleanup khi component unmount.
 *
 * - Sử dụng callback function trong setCount để cập nhật count dựa trên giá trị trước đó.
 * - Hiển thị nội dung tùy thuộc vào trạng thái của loading và error.
 */
import React, { useState, useEffect } from 'react'

const ComplexFunctionComponent = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // ComponentDidMount và ComponentDidUpdate
    console.log('Effect for count and data')

    // Simulate fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError('An error occurred while fetching data.')
        setLoading(false)
      })

    // Cleanup function (ComponentWillUnmount)
    return () => {
      console.log('Cleanup effect')
      // Perform cleanup tasks if needed
    }
  }, [count]) // Only re-run the effect if count changes

  useEffect(() => {
    // Effect for component mounting
    console.log('Effect for component mounting')

    // Cleanup function (ComponentWillUnmount)
    return () => {
      console.log('Cleanup effect for component mounting')
      // Perform cleanup tasks if needed
    }
  }, []) // Empty dependency array means it runs once after component mounts

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleIncrement}>Increment</button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ComplexFunctionComponent
