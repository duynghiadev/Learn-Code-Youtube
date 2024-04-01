import { useRef, useState } from 'react'
import './canbachai.css'

const Canbachai = () => {
  const [outputValue, setOutputValue] = useState('')
  const inputRef = useRef()

  const tinhCan = () => {
    const result = Math.sqrt(inputRef.current.value)
    setOutputValue(result)
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={tinhCan}>Tính căn</button>
      <p>{outputValue}</p>
    </div>
  )
}

export default Canbachai
