// App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import UserList from './UserList'
import UserDetail from './UserDetail'
import UserForm from './UserForm'
import Home from './Home'
import NotFound from './NotFound'
import './AppSuccess.css' // Import file CSS
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'

const App = () => {
  return (
    <Router>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/users/:userId' element={<UserDetail />} />
        <Route path='/users/new' element={<UserForm />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} /> {/* Thêm route cho trang 404 */}
      </Routes>
    </Router>
  )
}

export default App
