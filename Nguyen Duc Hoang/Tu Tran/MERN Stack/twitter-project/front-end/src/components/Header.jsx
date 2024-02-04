import { Link } from 'react-router-dom'
import '../css/Header.css'
import { useContext } from 'react'
import AppContext from './AppContext'

const Header = () => {
  const { state, dispatch } = useContext(AppContext)
  const { user } = state

  const signOut = () => {
    localStorage.removeItem('token')
    // reset user to null
    dispatch({ type: 'CURRENT_USER', payload: null })
  }

  return (
    //  HEADER
    <header className='header'>
      <h1 className='logo'>
        <Link to='/'>twitter</Link>
      </h1>
      <nav>
        <ul className='main-nav'>
          {user ? (
            <>
              <li>
                <span className='user-name'>Hello, {user.userName}</span>
              </li>
              <li onClick={() => signOut()}>
                <a>Sign out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
