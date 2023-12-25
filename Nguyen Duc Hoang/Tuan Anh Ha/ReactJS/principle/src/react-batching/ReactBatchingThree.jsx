import * as React from 'react'
import { flushSync } from 'react-dom'

const ReactBatchingThree = () => {
  const [counter, setCounter] = React.useState(42)
  const [clicked, setClicked] = React.useState(0)

  const handleCounter = (digit) => {
    flushSync(() => {
      setCounter(counter + digit)
    })
    setClicked(clicked + 1)
  }

  console.log('component rendering')

  return (
    <div>
      <button type='button' onClick={() => handleCounter(1)}>
        Increase
      </button>
      <button type='button' onClick={() => handleCounter(-1)}>
        Decrease
      </button>

      <div>Counter: {counter}</div>
      <div>Clicked: {clicked}</div>
    </div>
  )
}

export default ReactBatchingThree
