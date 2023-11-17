import './App.css'
import Product from './component/Product'
import User from './component/User'
import React from 'react'
import ReactDOM from 'react-dom/client'

// console.log('>>> User:', User(1, 2))

let stateValue // vị trí khai báo global

function useState(initialState) {
  if (stateValue === undefined) {
    stateValue = initialState
  }

  function setValue(value) {
    stateValue = value
    console.log('value up:', value)

    // Sau khi state thay đổi thì render lại
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
  }
  return [stateValue, setValue]
}

function App() {
  const [counter, setCounter] = useState(1)
  console.log('counter up:', counter)

  const handleIncrement = function () {
    setCounter(counter + 1)
    console.log('setCounter up:', counter)
    console.log('stateValue up:', stateValue)
  }
  console.log('setCounter up part 2:', counter)

  console.log('--------------------')

  const handleDecrement = function () {
    setCounter(counter - 1)
    console.log('setCounter down:', counter)
    console.log('stateValue down:', stateValue)
    console.log('setCounter down part 2:', counter)
  }

  return (
    <div className='App'>
      {/* <User /> */}
      {/* <Product /> */}

      {/* component counter */}
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
