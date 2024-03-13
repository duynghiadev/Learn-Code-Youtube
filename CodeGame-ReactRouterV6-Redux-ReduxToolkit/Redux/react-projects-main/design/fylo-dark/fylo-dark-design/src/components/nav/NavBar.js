import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='container nav-flex'>
        <Link to='/'>
          <img className='nav__logo' src={logo} alt='fylo-icon' />
        </Link>

        <ul className='nav__links'>
          <li>
            <Link to='/'>Features</Link>
          </li>
          <li>
            <Link to='/'>Team</Link>
          </li>
          <li>
            <Link to='/'>Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
