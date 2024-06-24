import { useDeferredValue, useState } from 'react'
import SlowComponent from '../useTransition hook/slowComponent'

const UseDeferredValueHook = () => {
  const value = 5
  const [number, setNumber] = useState(0)
  const deferredValue = useDeferredValue(number)

  const handleClick = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <h3>This is useDeferredValue Hook</h3>
      <button onClick={handleClick}>Click to add +1:</button>
      <p>Result: {number}</p>
      <p>Deferred value: {deferredValue}</p>
      <SlowComponent value={value} />
    </div>
  )
}

export default UseDeferredValueHook
