import React, { useState, useMemo } from 'react'

const fib = (n) => {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}

const UseMemo = () => {
  const [green, setGreen] = useState(true)
  const [num, setNum] = useState(1)
  // 这里使用useCallback并不能减少重复计算
  const memorizedFib = useMemo(() => fib(num), [num])

  return (
    <div>
      <h1 onClick={() => setGreen(!green)} style={{ color: green ? 'limegreen' : 'crimson' }}>
        UseMemo Example
      </h1>
      <h2>
        {/* memorizedFib是个值不是函数 */}
        Fibonacci of {num} is {memorizedFib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default UseMemo
