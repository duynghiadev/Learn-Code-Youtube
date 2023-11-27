import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Counter {counter}</h1> <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
