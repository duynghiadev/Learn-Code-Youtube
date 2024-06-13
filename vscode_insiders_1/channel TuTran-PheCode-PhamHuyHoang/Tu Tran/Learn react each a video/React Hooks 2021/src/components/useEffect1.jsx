import { useEffect, useState } from 'react'
import '../css/useEffect.css'

const UseEffect1 = () => {
  const [dataType, setDataType] = useState('posts')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 5)))
  }, [dataType])

  const renderData = () => {
    switch (dataType) {
      case 'posts':
        return (
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h4>Post Title 👉: {post.title}</h4>
                <p>Body 🎯: {post.body}</p>
              </li>
            ))}
          </ul>
        )
      case 'comments':
        return (
          <ul>
            {data.map((comment) => (
              <li key={comment.id}>
                <h4>Comment Name 👉: {comment.name}</h4>
                <p> Comment Body 🎯: {comment.body}</p>
              </li>
            ))}
          </ul>
        )
      case 'users':
        return (
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                <h4>User Name 👉: {user.name}</h4>
                <p>Email 🎯: {user.email}</p>
              </li>
            ))}
          </ul>
        )
      default:
        return <p>No data available.</p>
    }
  }

  return (
    <div className='container'>
      <div>
        <h1>useEffect hook custom from root video</h1>

        <button onClick={(e) => setDataType('posts')}>Posts</button>
        <button onClick={(e) => setDataType('comments')}>Comments</button>
        <button onClick={(e) => setDataType('users')}>Users</button>

        <div>
          <h3>Result:</h3>
          {/* Render Data */}
          {renderData()}
        </div>
      </div>
    </div>
  )
}

export default UseEffect1
