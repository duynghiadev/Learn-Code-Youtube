import { useState } from 'react'
import Counter from './components/Counter'

const App_1 = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div className='App'>
      <p>This is App_1</p>
      <Counter counter={counter} onHandleIncrement={handleIncrement} />
    </div>
  )
}

export default App_1
