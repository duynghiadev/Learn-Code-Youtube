import React, { useState, useRef } from 'react'

const UseRef = () => {
  const [number, setNumber] = useState(0)
  const numRef = useRef(0)

  let plainNumber = 0

  const incrementAndDelayLogging = () => {
    plainNumber++

    setNumber((number) => {
      console.log('setState number: ', number)
      console.log('return setState number + 1:', number + 1)
      return number + 1
    })

    numRef.current++ // Only 'current' is available
    // It references the current state and is not affected by setNumber

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
