import * as React from 'react'

const ReactBatchingTwo = () => {
  const [counter, setCounter] = React.useState(42)
  const [clicked, setClicked] = React.useState(0)

  const handleCounterIncrease = () => {
    setTimeout(() => {
      setCounter(counter + 1)
      setClicked(clicked + 1)
    }, 1000)
  }

  const handleCounterDecrease = async () => {
    await Promise.resolve()

    setCounter(counter - 1)
    setClicked(clicked + 1)
  }

  console.log('component rendering')

  return (
    <div>
      <button type='button' onClick={handleCounterIncrease}>
        Increase
      </button>
      <button type='button' onClick={handleCounterDecrease}>
        Decrease
      </button>

      <div>Counter: {counter}</div>
      <div>Clicked: {clicked}</div>
    </div>
  )
}

export default ReactBatchingTwo
