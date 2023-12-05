import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Product from './screens/Product'
import NotFound from './screens/NotFound'

function App() {
  return (
    <Router>
      {/* nav = Navigation
        - Khi ta khai báo như này thì tất cả đường Link đều có trên tất cả các trang (giống như header)
      */}
      <nav>
        <h1>This is header</h1> <br />
        <Link to={'/'}>Home</Link> <br />
        <Link to={'/about'}>About</Link> <br />
        <Link to={'/products'}>Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/*
        - Khi ta khai báo như này thì khi sang tất cả trang thì trang nào cũng có footer
      */}
      <br />
      <h1>This is Footer</h1>
    </Router>
  )
}

export default App
