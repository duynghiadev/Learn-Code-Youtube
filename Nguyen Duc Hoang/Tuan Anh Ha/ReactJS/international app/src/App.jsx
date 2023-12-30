import { useReducer } from 'react'
import './App.css'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'add':
      return state + 1
    case 'subtract':
      return state - 1
    case 'reset':
      return 0
    default:
      throw new Error('Unexpected Action')
  }
}

function App() {
  const [number, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Reducer hook in react</h1>
      <h2>{number}</h2>
      <button onClick={() => dispatch('add')}>+</button>
      <hr />
      <button onClick={() => dispatch('subtract')}>-</button>
      <hr />
      <button onClick={() => dispatch('reset')}>Reset</button>
      <hr />
    </div>
  )
}

export default App
