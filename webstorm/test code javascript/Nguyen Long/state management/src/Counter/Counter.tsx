import { useEffect, useState } from 'react'
import { store } from '../configureStore'
import { decrement, increment } from './actions'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(store.getState().counter.count)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.count)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleIncrement = () => {
    increment(1)
  }

  const handleDecrement = () => {
    decrement(1)
  }

  return (
    <div className='counter-container'>
      <button className='counter-button decrement' onClick={handleDecrement}>
        -
      </button>
      <span className='counter-value'>{count}</span>
      <button className='counter-button increment' onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default Counter
