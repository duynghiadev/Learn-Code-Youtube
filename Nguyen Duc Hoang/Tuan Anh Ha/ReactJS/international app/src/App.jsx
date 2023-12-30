import { useReducer } from 'react'
import './App.css'
import UseRefHook from './components/useRef hook/useRef'
import useFetch from './components/hooks/useFetch'

const initialState = 0
const reducer = (state, action) => {
  console.log('state in reducer:', state)
  console.log('action in reducer:', action)

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
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  console.log('data useFetch loading:', loading, data)

  console.log('number in component App:', number)
  console.log('dispatch in component App:', dispatch)
  console.log('reducer in component App:', reducer)
  console.log('initialState in component App:', initialState)

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
      <UseRefHook />
      <hr />
      <h2>Custom Hook</h2>
    </div>
  )
}

export default App
