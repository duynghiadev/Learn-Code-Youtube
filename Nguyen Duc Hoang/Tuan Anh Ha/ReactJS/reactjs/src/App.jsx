import { useState } from 'react'
import './App.css'
import CustomerOne from './components/Customer/CustomerOne'
import CustomerTwo from './components/Customer/CustomerTwo'

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
      <CustomerOne />
      <hr />
      <CustomerTwo />
      <hr />
    </div>
  )
}

export default App
