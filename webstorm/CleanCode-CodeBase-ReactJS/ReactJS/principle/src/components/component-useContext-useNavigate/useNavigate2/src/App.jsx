// components/App.js
import React, { useReducer, useEffect, Suspense, lazy, useTransition } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import appReducer, { actionTypes, initialState } from './reducers/appReducer'
import useFetch from './hooks/useFetch'

const CelebrityList = lazy(() => import('./components/CelebrityList'))

const CelebrityDetail = lazy(() => import('./components/CelebrityDetail'))

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { data, loading } = useFetch('https://randomuser.me/api/?results=5')
  const [startTransition] = useTransition({ timeoutMs: 3000 })

  useEffect(() => {
    if (data) {
      dispatch({ type: actionTypes.SET_CELEBRITIES, payload: data.results })
    }
  }, [data])

  const handleCelebrityClick = (celebrity) => {
    startTransition(() => {
      dispatch({ type: actionTypes.SET_SELECTED_CELEBRITY, payload: celebrity })
    })
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path='/'
              element={
                <CelebrityList
                  celebrities={state.celebrities}
                  onCelebrityClick={handleCelebrityClick}
                />
              }
            />
            <Route
              path='/celebrity/:id'
              element={<CelebrityDetail celebrity={state.selectedCelebrity} />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
