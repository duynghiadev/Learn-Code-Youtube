import { useState, useEffect, useRef } from 'react'

function UseRefDemo() {
  const [inputValue, setInputValue] = useState('')
  const count = useRef(0)

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    count.current += 1
  })

  return (
    <div className='use-ref'>
      <h1>=========================</h1>
      <input type='text' value={inputValue} onChange={onChange} />
      <h1>Render Count: {count.current}</h1>
      <h1>=========================</h1>
    </div>
  )
}

export default UseRefDemo
