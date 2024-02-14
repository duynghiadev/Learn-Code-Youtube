import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoute from './routes/AppRoute.jsx'
import About from './components/About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppRoute />}>
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
