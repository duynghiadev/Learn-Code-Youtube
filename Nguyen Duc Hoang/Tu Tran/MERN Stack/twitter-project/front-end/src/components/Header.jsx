import '../css/Header.css'

const Header = () => {
  return (
    //  HEADER
    <header className='header'>
      <h1 className='logo'>
        <a href='#'>twitter</a>
      </h1>
      <nav>
        <ul className='main-nav'>
          <li>
            <a href='#'>Login</a>
          </li>
          <li>
            <a href='#'>Register</a>
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
