// UserDetail.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import './UserDetail.scss' // Import your SCSS file

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>()
  console.log('userId in components UserDetail:', userId)

  if (!userId) {
    return <div className='user-detail-container not-found'>User not found</div>
  }

  const { user } = useUser(userId)
  console.log('user in components UserDetial:', user)

  if (!user) {
    return <div className='user-detail-container loading'>Loading...</div>
  }

  return (
    <div className='user-detail-container'>
      <h2 className='user-detail-heading'>User Detail</h2>
      <p className='user-detail-item'>Id: {user.id}</p>
      <p className='user-detail-item'>Name: {user.name}</p>
      <p className='user-detail-item'>Email: {user.email}</p>
      <p className='user-detail-item'>Phone: {user.phone}</p>
      <p className='user-detail-item'>Company: {user.company.name}</p>
      <p className='user-detail-item'>Address: {user.address.city}</p>
      <p className='user-detail-item'>Street: {user.address.street}</p>
      <p className='user-detail-item'>Zip code: {user.address.zipcode}</p>
      <p className='user-detail-item'>Website: {user.website}</p>
      <Link to='/' className='back-link'>
        Back to User List
      </Link>
    </div>
  )
}

export default UserDetail
