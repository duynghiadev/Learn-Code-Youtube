import React, { useState, useMemo } from 'react'

const fib = (n) => {
  if (n <= 1) return 1
  /**
   * Prints the values of n-1 and n-2 to the console, with a separator.
   * @param {number} n - The index of the Fibonacci number to calculate.
   */
  console.log(`n-1: ${n - 1}`)
  console.log(`n-2: ${n - 2}`)
  console.log('-----------------')
  return fib(n - 1) + fib(n - 2)
}

const UseMemo = () => {
  const [green, setGreen] = useState(true)
  const [num, setNum] = useState(1)
  // Using useCallback here does not reduce redundant calculations
  const memorizedFib = useMemo(() => fib(num), [num])

  return (
    <div>
      <h1 onClick={() => setGreen(!green)} style={{ color: green ? 'limegreen' : 'crimson' }}>
        UseMemo Example
      </h1>

      <h2>
        {/* memorizedFib is a value, not a function */}
        Fibonacci of {num} is {memorizedFib}
      </h2>

      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default UseMemo
