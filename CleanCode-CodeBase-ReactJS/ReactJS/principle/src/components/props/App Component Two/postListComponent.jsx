import React from 'react'

const PostList = ({ posts, onPostClick }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onPostClick(post)}>
            <code>Title:</code> {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
