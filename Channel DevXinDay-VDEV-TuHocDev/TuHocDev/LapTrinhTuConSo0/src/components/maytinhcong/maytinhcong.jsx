import { useDispatch } from 'react-redux'
import './maytinhcong.css'
import { useEffect } from 'react'
import { setTieude } from '../../redux/redux.root'

const Maytinhcong = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTieude('Máy tính cộng'))
  }, [])

  return <div></div>
}

export default Maytinhcong
