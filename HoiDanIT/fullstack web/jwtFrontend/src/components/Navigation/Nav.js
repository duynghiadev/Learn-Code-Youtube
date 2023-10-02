import { useEffect, useState } from 'react'
import './Nav.scss'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = (props) => {
  const [isShow, setIsShow] = useState(true)
  let location = useLocation()

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsShow(false)
    }
  }, [])

  return (
    <>
      {isShow === true && (
        <div className='topnav'>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      )}
    </>
  )
}

export default Nav
