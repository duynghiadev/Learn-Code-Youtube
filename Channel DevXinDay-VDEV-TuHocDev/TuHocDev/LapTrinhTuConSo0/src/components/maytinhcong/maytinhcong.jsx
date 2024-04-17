import { useDispatch } from 'react-redux'
import './maytinhcong.css'
import { useEffect, useRef, useState } from 'react'
import { setTieude } from '../../redux/redux.root'

const Maytinhcong = () => {
  const firstNumber = useRef()
  const secondNumber = useRef()

  const [outputValue, setOutputValue] = useState(0)
  const dispatch = useDispatch()

  const tinhCong = () => {
    const first = firstNumber.current.value
    const second = secondNumber.current.value
    setOutputValue(Number(first) + Number(second))
  }

  useEffect(() => {
    dispatch(setTieude('Máy tính cộng'))
  }, [])

  return (
    <div>
      <input ref={firstNumber} />
      <input ref={secondNumber} />
      <button onClick={tinhCong}>Tính toán</button>
      <p>{outputValue}</p>
    </div>
  )
}

export default Maytinhcong
