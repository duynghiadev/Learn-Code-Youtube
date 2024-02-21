import './App.css'
import { increaseCounter, decreaseCounter } from './action/actions'
import { useSelector, useDispatch } from 'react-redux'
import Home from './components/Home'

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

  return (
    <div className='App'>
      {/* <div>Count: {newCount}</div>
      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button> */}

      <Home />
    </div>
  )
}

export default App
