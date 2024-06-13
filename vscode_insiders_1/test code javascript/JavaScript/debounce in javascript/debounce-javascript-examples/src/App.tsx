import { useState } from 'react'
import './App.css'
import DebouncedSearchInput from './DebouncedSearchInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <h4>This is a Counter</h4>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <DebouncedSearchInput />
    </>
  )
}

export default App
