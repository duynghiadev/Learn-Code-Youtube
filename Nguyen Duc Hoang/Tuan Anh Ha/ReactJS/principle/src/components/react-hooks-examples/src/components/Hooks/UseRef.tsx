import React, { useState, useRef } from 'react'

const UseRef = () => {
  const [number, setNumber] = useState(0)
  const numRef = useRef(0)
  let plainNumber = 0

  const incrementAndDelayLogging = () => {
    plainNumber++
    setNumber((number) => {
      console.log('setState')
      return number + 1
    })
    numRef.current++ // 只有current可用
    // 引用的是当前的state，不受setNumber的影响
    setTimeout(() => {
      alert(`plain number: ${plainNumber}, state number: ${number}, ref number: ${numRef.current}`)
    }, 1000)
    console.log('hello')
  }

  return (
    <div>
      <h1>UseRef Example</h1>
      <button onClick={incrementAndDelayLogging}>Delay Logging</button>
      <h4>plain number: {plainNumber}</h4>
      <h4>state number: {number}</h4>
      <h4>ref number: {numRef.current}</h4>
    </div>
  )
}

export default UseRef
