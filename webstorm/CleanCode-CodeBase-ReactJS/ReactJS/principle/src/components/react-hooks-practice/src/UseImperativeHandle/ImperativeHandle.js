import React, { useRef } from 'react'
import Button from './Button'

function ImperativeHandle() {
  const buttonRef = useRef(null)

  return (
    <div>
      <h1>useRef hook, useImperativeHandle, forwardRef </h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle()
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
      <hr />
    </div>
  )
}

export default ImperativeHandle
