import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
    //  HEADER
    <header className='header'>
      <h1 className='logo'>
        <Link to='/'>twitter</Link>
      </h1>
      <nav>
        <ul className='main-nav'>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <span href='#' className='user-name'>
              Hello, Duy Nghia
            </span>
          </li>
          <li>
            <a href='#'>Sign out</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
