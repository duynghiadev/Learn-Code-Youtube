import React, { useState, useEffect, useRef } from 'react'

interface CounterProps {
  initialCount: number
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const countRef = useRef(0)

  useEffect(() => {
    // Log the count whenever it changes
    console.log(`Count changed: ${count}`)
  }, [count])

  const handleIncrement = () => {
    setCount(count + 1)
    countRef.current += 1
  }

  const handleDecrement = () => {
    setCount(count - 1)
    countRef.current -= 1
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Internal Count (no render): {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
