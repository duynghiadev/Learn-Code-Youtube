import React, { useState } from 'react'

const UseState = () => {
  const [isGreen, setIsGreen] = useState(true) // The reference to 'isGreen' changes with each render
  console.log('render')

  return (
    <h1 onClick={() => setIsGreen(!isGreen)} style={{ color: isGreen ? 'limegreen' : 'crimson' }}>
      useState Example
    </h1>
  )
}

export default UseState
