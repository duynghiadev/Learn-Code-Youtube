import React, { useRef } from 'react'

function RefTutorial() {
  const inputRef = useRef(null)

  const onClick = () => {
    inputRef.current.value = ''
  }

  return (
    <div>
      <h1>useRef hook</h1>
      <h2>Pedro</h2>
      <input type='text' placeholder='Ex...' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      <hr />
    </div>
  )
}

export default RefTutorial
