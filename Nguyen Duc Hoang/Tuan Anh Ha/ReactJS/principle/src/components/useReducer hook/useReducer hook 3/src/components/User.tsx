// User.tsx
import React from 'react'

interface UserProps {
  user: {
    id: number
    name: string
    email: string
    phone: string
  }
  onSelect: () => void
}

const User: React.FC<UserProps> = ({ user, onSelect }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={onSelect}>View Details</button>
    </div>
  )
}

export default User
