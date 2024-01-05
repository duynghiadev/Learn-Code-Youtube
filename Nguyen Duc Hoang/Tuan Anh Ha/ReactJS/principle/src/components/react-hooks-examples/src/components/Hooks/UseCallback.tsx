import React, { useState, useCallback, memo, useEffect } from 'react'

// 完全受控组件
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

const fib = (n) => {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}

const UseCallBack = () => {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(1)
  // 持久化引用不会引起子组件频繁渲染
  const memorizedFib = useCallback(fib, []) // 单纯传参形式无需添加任何依赖

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
      <button onClick={() => setCount(count + 1)}>+</button>
      <ExpensiveComputationComponent compute={memorizedFib} count={count} />
    </div>
  )
}

export default UseCallBack
