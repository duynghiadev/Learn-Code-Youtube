import './App.scss'
import Login from './components/Login/Login'
import Nav from './components/Navigation/Nav'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path='/news'>new</Route>
          <Route path='/about'>about</Route>
          <Route path='/contact'>contact</Route>
          <Route path='/' exact>
            Home
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>404 Not Fount</Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
