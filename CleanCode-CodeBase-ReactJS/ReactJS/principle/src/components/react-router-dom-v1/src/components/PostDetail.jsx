// PostDetail.js

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './PostDetail.css' // Import tệp CSS

const PostDetail = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Gọi API miễn phí từ trên mạng để lấy thông tin chi tiết bài viết dựa trên ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [postId])

  if (!post) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='post-detail-container'>
      <h2 className='post-detail-header'>{post.title}</h2>
      <p className='post-detail-body'>{post.body}</p>

      {/* Nút quay về danh sách bài viết */}
      <Link to='/users'>
        <button className='back-button'>Quay về danh sách bài viết</button>
      </Link>
    </div>
  )
}

export default PostDetail
