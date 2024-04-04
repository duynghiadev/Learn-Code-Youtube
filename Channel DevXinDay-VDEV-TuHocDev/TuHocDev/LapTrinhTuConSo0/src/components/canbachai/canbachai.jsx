import { useEffect, useRef, useState } from 'react'
import './canbachai.css'
import { useDispatch } from 'react-redux'
import { setTieude } from '../../redux/redux.root'

const Canbachai = () => {
  const dispatch = useDispatch()
  const [outputValue, setOutputValue] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    dispatch(setTieude('Căn bậc hai'))
  }, [])

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
