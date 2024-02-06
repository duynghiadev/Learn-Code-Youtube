import { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const [open, setOpen] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (open) {
      inputRef.current.focus()
    }
  }, [open])

  return (
    <div className='container'>
      <div>
        <h1>useRef hook</h1>
        <p>Hello World</p>
        <button onClick={() => setOpen(!open)}>Reply</button>
        <br />
        <br />
        {open && (
          <input
            type='text'
            name='comment'
            id='name'
            placeholder='Your Comment Go Here...'
            ref={inputRef}
          />
        )}
      </div>
    </div>
  )
}

export default UseRef
