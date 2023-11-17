import './App.css'
import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(1)

  const handleIncrement = function () {
    setCounter(counter + 1)
  }

  const handleDecrement = function () {
    setCounter(counter - 1)
  }

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
