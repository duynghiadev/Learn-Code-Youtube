import React, { useState } from 'react'
import './UserDetailsOne.css'

const UserDetailsOne = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false)

  console.log('showDetails:', showDetails)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div>
      <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && (
        <div>
          <h3>User Details</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  )
}

export default UserDetailsOne
