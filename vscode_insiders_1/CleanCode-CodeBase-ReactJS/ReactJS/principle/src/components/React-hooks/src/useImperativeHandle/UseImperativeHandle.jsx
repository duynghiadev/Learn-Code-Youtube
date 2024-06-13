import React, { useRef } from 'react'
import Button from './Button'

function UseImperativeHandle() {
  const buttonRef = useRef(null)

  return (
    <div>
      <strong>This is a useImperativeHandle hook 👇</strong>
      <br />
      <button
        onClick={() => {
          buttonRef.current.alterToggle()
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default UseImperativeHandle
