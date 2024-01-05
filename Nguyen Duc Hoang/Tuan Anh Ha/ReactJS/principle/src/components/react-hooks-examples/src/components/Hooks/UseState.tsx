import React, { useState } from 'react'

const UseState = () => {
  const [isGreen, setIsGreen] = useState(true) // 每次渲染isGreen的引用会变化
  console.log('render')

  return (
    <h1 onClick={() => setIsGreen(!isGreen)} style={{ color: isGreen ? 'limegreen' : 'crimson' }}>
      useState Example
    </h1>
  )
}

export default UseState
