import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const ElaborateInput = forwardRef(({ hasError, placeholder, value, update }, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => {
    // 其实是把子组件ref的操作方法传给父组件的ref
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
