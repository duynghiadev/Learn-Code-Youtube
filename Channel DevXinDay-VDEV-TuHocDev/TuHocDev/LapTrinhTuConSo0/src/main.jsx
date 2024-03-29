import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Canbachai from './components/canbachai/canbachai.jsx'
import Maytinhcong from './components/maytinhcong/maytinhcong.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/canbachai' element={<Canbachai />} />
        <Route path='/maytinhcong' element={<Maytinhcong />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
