import './App.css'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from './action/actions'
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'

const App = (props) => {
  const newCount = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  // Event handler --> Người xử lý dự kiện
  const handleIncrease = () => {
    // bên trong dispatch là 1 action -> action là 1 function
    dispatch(increaseCounter())
  }

  const handleDecrease = () => {
    // bên trong dispatch là 1 action -> action là 1 function
    dispatch(decreaseCounter())
  }

  const fetchAllUser = async () => {
    const res = await axios.get('http://localhost:8080/users/all')
    const data = res && res.data ? res.data : []
    console.log('>>> check data axios:', data)
  }

  useEffect(() => {
    fetchAllUser()
  }, [])

  return (
    <div className='App'>
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  )
}

export default App
