import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../api/api'

const PostDetail = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost(id)
        setPost(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleGoBack = () => {
    navigate('/posts')
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostDetail
