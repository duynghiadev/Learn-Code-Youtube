import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './Hooks/UseState'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import UseRef from './Hooks/UseRef'
import UseLayoutEffect from './Hooks/UseLayoutEffect'
import UseContext from './Hooks/UseContext'
import UseImperativeHandle from './Hooks/UseImperativeHandle/index.js'
import '../sass/style.scss'

const Main = () => <div>Main Page</div>
const App = () => {
  return (
    <div className='App'>
      <Router>
        <div className='links'>
          <Link to='/'>
            Main <br />
          </Link>
          <Link to='/useState'>
            1. useState <br />
          </Link>
          <Link to='/useReducer'>
            2. useReducer <br />
          </Link>
          <Link to='/useMemo'>
            3. useMemo <br />
          </Link>
          <Link to='/useCallback'>
            4. useCallback & memo <br />
          </Link>
          <Link to='/useRef'>
            5. useRef <br />
          </Link>
          <Link to='/useLayoutEffect'>
            6. useLayoutEffect <br />
          </Link>
          <Link to='/useContext'>
            7. useContext <br />
          </Link>
          <Link to='/useImperativeHandle'>
            8. useImperativeHandle & forwardRef <br />
          </Link>
        </div>
        <Route path='/useImperativeHandle' component={UseImperativeHandle} />
        <Route path='/useContext' component={UseContext} />
        <Route path='/useLayoutEffect' component={UseLayoutEffect} />
        <Route path='/useRef' component={UseRef} />
        <Route path='/useCallback' component={UseCallback} />
        <Route path='/useMemo' component={UseMemo} />
        <Route path='/useReducer' component={UseReducer} />
        <Route path='/useState' component={UseState} />
        <Route path='/' exact component={Main}></Route>
      </Router>
    </div>
  )
}

export default App
