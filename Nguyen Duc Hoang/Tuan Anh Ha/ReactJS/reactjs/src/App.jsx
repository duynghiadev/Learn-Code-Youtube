import { useState } from 'react'
import './App.css'
import CustomerOne from './components/Customer/CustomerOne'
import CustomerTwo from './components/Customer/CustomerTwo'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import PageNotFound from './pages/Page404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation'

function App() {
  const [count, setCount] = useState(0)
  const [textColor, setTextColor] = useState('black')

  const handleAdd = () => {
    setCount((count) => count + 1) // not render
    setTextColor('blue') // not render
    // Batching: only re-render once at the end
  }

  const handleSubtract = () => {
    setCount((count) => count - 1)
    setTextColor('red')
  }

  return (
    <div className='App'>
      <h1>Batching in React 18</h1>
      <button onClick={handleAdd}>+ 1</button>
      <hr />
      <button onClick={handleSubtract}>- 1</button>
      <h2 style={{ color: textColor }}>Number: ${count} </h2>

      <hr />
      {/* <CustomerOne />
      <hr />
      <CustomerTwo />
      <hr /> */}

      <BrowserRouter>
        <h1>Customer Management App</h1>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <hr />
    </div>
  )
}

export default App
