/**
 * - Dưới đây là một ví dụ phức tạp hơn sử dụng hook useState và useEffect để quản lý trạng thái và hiệu suất. Trong ví dụ này, chúng ta sẽ xây dựng một ứng dụng hiển thị danh sách bài viết và chi tiết của từng bài viết. Dữ liệu sẽ được lấy từ một API sử dụng fetch và hiển thị bằng cách sử dụng map để tạo các thành phần.
 *
 * Trong ví dụ này:
 *
 * - useEffect được sử dụng để gọi API và cập nhật trạng thái posts khi component được mount.
 * - Dữ liệu từ API được lưu trữ trong posts và được truyền vào PostList component thông qua props.
 * - Mỗi khi một bài viết được click, handlePostClick được gọi để cập nhật trạng thái selectedPost và hiển thị chi tiết của bài viết.
 *
 * - Ví dụ này giúp minh họa cách sử dụng useState và useEffect để quản lý trạng thái và lấy dữ liệu từ API trong một ứng dụng React.
 */
import React, { useState, useEffect } from 'react'
import PostList from './postListComponent'

const AppComponentOne = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  console.log('selectedPost:', selectedPost)

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json()) // Chuyển dữ liệu từ JSON sang object
      .then((data) => {
        console.log('data:', data)
        return setPosts(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) // Empty dependency array ensures the effect runs only once on mount

  const handlePostClick = (post) => {
    console.log('post parent:', post)
    setSelectedPost(post)
  }

  return (
    <div>
      <h1>Blog AppComponentOne</h1>
      <PostList posts={posts} onPostClick={handlePostClick} />
      {selectedPost && (
        <div>
          <br />
          <h2>Post Details</h2>
          <p>Title: {selectedPost.title}</p>
          <p>Body: {selectedPost.body}</p>
        </div>
      )}
    </div>
  )
}

export default AppComponentOne
