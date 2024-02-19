import './Header.scss'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { doLogOut } from '../../redux/action/accountAction'
import logoSvg from '../../logo.svg'

const Header = () => {
  const user = useSelector((state) => state.account.userInfo)
  const dispatch = useDispatch()

  const handleLogin = () => {
    // redirect to sso
    // http://localhost:8080/login?serviceURL=http://localhost:3000/
    window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`
  }

  const handleLogout = () => {
    dispatch(doLogOut())
  }

  return (
    <>
      <Navbar expand='lg' bg='light'>
        <Container>
          <NavLink to='/' className='navbar-brand'>
            <img
              src={logoSvg}
              width='30px'
              height='30px'
              className='d-inline-block align-top'
              alt=''
            />
            Duy Nghia Dev SSO
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <NavLink to='/weather' className='nav-link'>
                Weather
              </NavLink>
            </Nav>

            {user && user.access_token && (
              <Nav>
                <Nav.Link href='#'>Welcome {user.username}</Nav.Link>
              </Nav>
            )}

            <Nav>
              <NavDropdown title='Settings' id='basic-nav-dropdown'>
                {user && user.access_token ? (
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item onClick={() => handleLogin()}>
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
