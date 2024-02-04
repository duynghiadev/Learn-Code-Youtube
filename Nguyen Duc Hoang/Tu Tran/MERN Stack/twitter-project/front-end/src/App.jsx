import { useReducer } from 'react'
import PageNotFound from './components/404-page'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppReducer from './reducers/AppReducer'

function App() {
  const initialState = { user: null, posts: [] }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
