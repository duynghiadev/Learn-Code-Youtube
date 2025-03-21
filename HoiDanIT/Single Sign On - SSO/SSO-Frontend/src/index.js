import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoute from './routes/AppRoute'
import About from './components/About/About'
import { Provider } from 'react-redux'
import store from './redux/store'
import Code from './components/Code/Code'
import Home from './components/Home/Home'
import PrivateRoute from './routes/PrivateRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppRoute />}>
            <Route path='/' index element={<Home />} />
            <Route
              path='/weather'
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='/code' element={<Code />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
