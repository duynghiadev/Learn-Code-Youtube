// components/CelebrityList.js
import React from 'react'
import { Link } from 'react-router-dom'

const CelebrityList = ({ celebrities }) => {
  return (
    <div>
      <h2>Celebrities</h2>
      <ul>
        {celebrities.map((celebrity) => (
          <li key={celebrity.login.uuid}>
            <Link to={`/celebrity/${celebrity.login.uuid}`}>
              {celebrity.name.first} {celebrity.name.last}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CelebrityList
