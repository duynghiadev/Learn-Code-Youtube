import './App.scss'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from './components/Register/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
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
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='*'>404 Not Fount</Route>
        </Switch>
      </div>

      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Router>
  )
}

export default App
