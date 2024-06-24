import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useMainGlobalContext } from '../../utils/contexts/MainContext'

const HomePage = () => {
    const {count} = useMainGlobalContext();
  return (
    <div className='flex flex-col'>
        Hello World!
        <Link to={'/user-manager'}>Quản lý tài khoản</Link>
        <Link to={'/'}>Home Page</Link>
        <Outlet/>
    </div>
  )
}

export default HomePage