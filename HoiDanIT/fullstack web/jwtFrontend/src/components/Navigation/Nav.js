import { useContext, useEffect, useState } from 'react'
import './Nav.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Nav = (props) => {
  const { user } = useContext(UserContext)
  const location = useLocation()

  if (user && user.isAuthenticated === true || location.pathname === '/') {
    return (
      <>
        <div className='topnav'>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </>
    )
  } else {
    return <></>
  }
}

export default Nav
