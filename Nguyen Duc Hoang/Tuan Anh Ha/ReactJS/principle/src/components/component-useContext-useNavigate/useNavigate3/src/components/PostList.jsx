import React, { useState, useReducer, useTransition, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../api/api'
import Post from './Post'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const PostList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [startTransition, isPending] = useTransition({ timeoutMs: 300 })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_START' })
        const data = await getPosts()
        startTransition(() => {
          dispatch({ type: 'FETCH_SUCCESS', payload: data })
        })
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message })
      }
    }

    fetchData()
  }, [startTransition])

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`)
  }

  return (
    <div>
      <h2>Posts</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {state.posts.map((post) => (
        <Post key={post.id} post={post} onClick={() => handlePostClick(post.id)} />
      ))}
      {isPending && <p>Loading more posts...</p>}
    </div>
  )
}

export default PostList
