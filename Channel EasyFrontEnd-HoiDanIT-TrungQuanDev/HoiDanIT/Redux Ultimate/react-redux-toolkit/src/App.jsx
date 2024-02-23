import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/slices/counterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  console.log('count:', count)

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>hello Redux ToolKit</h3>
        <div className='btn-actions'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div>Count: {count}</div>
      </header>
    </div>
  )
}

export default App
