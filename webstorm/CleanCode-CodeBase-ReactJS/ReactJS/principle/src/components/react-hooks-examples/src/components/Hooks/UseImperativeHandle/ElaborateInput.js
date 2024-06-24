import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const ElaborateInput = forwardRef(({ hasError, placeholder, value, update }, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => {
    // Actually, it is passing the operation methods of the child component's ref to the parent component ref
    return {
      focus() {
        inputRef.current.focus()
      }
    }
  })

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => update(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: '5px 15px',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: hasError ? 'crimson' : '#999',
        borderRadius: '5px',
        margin: '0 10px',
        textAlign: 'center'
      }}
    />
  )
})

export default ElaborateInput
