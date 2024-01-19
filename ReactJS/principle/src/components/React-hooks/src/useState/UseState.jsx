import React, { useState } from 'react'

function UseState() {
  const [counter, setCounter] = useState(0)

  let increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div id='usestate'>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseState

// ❌❌Sau khi học xong khóa Hook của anh Hậu Nguyễn thì nên đọc lại code của các ví dụ hook❌❌

// ❌❌Và học tiếng anh❌❌
