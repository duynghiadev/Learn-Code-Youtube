import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>My React App</h1>
      <nav>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
