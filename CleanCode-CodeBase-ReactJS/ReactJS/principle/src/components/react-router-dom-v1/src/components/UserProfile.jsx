import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './UserProfile.css' // Import tệp CSS

const UserProfile = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Gọi API miễn phí từ trên mạng để lấy thông tin người dùng dựa trên ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))

    // Gọi API miễn phí để lấy bài viết của người dùng dựa trên ID
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [id])

  if (!user) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='profile-container'>
      <h2 className='profile-header'>Thông tin người dùng</h2>
      <p className='profile-info'>Tên: {user.name}</p>
      <p className='profile-info'>Email: {user.email}</p>
      {/* Thêm các thông tin khác cần hiển thị */}

      <h3 className='profile-subheader'>Bài viết của người dùng</h3>
      <ul className='profile-posts-list'>
        {posts.map((post) => (
          <li key={post.id} className='profile-post-item'>
            <Link to={`/posts/${post.id}`} className='profile-post-link'>
              {post.title}
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

export default UserProfile
