import React from 'react'
import { Link } from 'react-router-dom'

const UserManager = () => {
  return (
    <div>
      This is user manager page
      <Link to={'/user-manager'}>Quản lý tài khoản</Link>
        <Link to={'/'}>Home Page</Link>
    </div>
  )
}

export default UserManager