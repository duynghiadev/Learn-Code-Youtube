import { useCallback, useState } from 'react'
import Child from './Child'

export default function UseCallBack() {
  const [toggle, setToggle] = useState(false)
  const data = 'My name is'

  const returnComment = useCallback(
    (name) => {
      return data + name
    },
    [data]
  )

  return (
    <div className='App'>
      <strong>This is a useCallback hook 👇</strong>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}
