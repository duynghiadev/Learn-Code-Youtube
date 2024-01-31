// AllPosts.js

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AllPosts.css' // Import tệp CSS

const AllPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Gọi API miễn phí từ trên mạng để lấy tất cả bài viết
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className='all-posts-container'>
      <h2 className='all-posts-header'>Tất cả bài viết</h2>
      <ul className='all-posts-list'>
        {posts.map((post) => (
          <li key={post.id} className='all-posts-item'>
            <Link to={`/posts/${post.id}`} className='all-posts-link'>
              {post.title} (Người dùng ID: {post.userId})
            </Link>
          </li>
        ))}
      </ul>

      {/* Nút quay về trang chủ */}
      <Link to='/'>
        <button className='back-button'>Quay về trang chủ</button>
      </Link>
    </div>
  )
}

export default AllPosts
