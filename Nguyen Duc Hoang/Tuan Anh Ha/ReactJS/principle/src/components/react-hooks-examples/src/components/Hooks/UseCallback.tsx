import React, { useState, useCallback, memo, useEffect } from 'react'

// fully controlled component
const ExpensiveComputationComponent = memo(
  ({ compute, count }: { compute: Function; count: number }) => {
    return (
      <div>
        <h1>
          Fibonacci for {count} is {compute(count)}
        </h1>
        <h4>last render {new Date().toLocaleTimeString()}</h4>
      </div>
    )
  }
)

const fib = (number: number) => {
  if (number <= 1) return 1
  return fib(number - 1) + fib(number - 2)
}

const UseCallBack = () => {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(1)
  // Persistent references do not cause frequent rendering of child components
  const memorizedFib = useCallback(fib, []) // Pure parameter passing form without adding any dependencies

  // console.log('new Date():', new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      {/* {console.log('time.toLocaleTimeString():', time.toLocaleTimeString())} */}

      <button onClick={() => setCount(count + 1)}>+</button>
      <ExpensiveComputationComponent compute={memorizedFib} count={count} />
    </div>
  )
}

export default UseCallBack
