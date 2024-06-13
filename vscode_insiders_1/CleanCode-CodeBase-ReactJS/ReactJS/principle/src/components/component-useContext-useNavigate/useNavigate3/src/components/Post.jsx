import React from 'react'

const Post = ({ post, onClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }} onClick={onClick}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
