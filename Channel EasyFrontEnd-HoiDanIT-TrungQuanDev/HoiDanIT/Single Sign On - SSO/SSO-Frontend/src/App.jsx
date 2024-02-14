import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import { decreaseCounter, increaaseCounter } from './redux/action/counterAction'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div className='App'>
      <Header />
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increaaseCounter())}>
        Increase Count
      </button>
      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease Count
      </button>
    </div>
  )
}

export default App
