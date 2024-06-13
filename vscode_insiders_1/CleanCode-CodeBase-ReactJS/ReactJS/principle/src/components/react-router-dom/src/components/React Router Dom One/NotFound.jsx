// NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h2 className='not-found-title'>404 - Not Found</h2>
      <p className='not-found-description'>Oops! The page you're looking for does not exist.</p>
      <Link to='/' className='back-to-home-btn'>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
