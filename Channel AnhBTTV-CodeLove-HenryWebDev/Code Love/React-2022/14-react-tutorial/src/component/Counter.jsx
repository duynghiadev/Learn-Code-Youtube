import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(1)

  const formatZero = function () {
    if (counter === 0) {
      return <span>duynghiadev</span>
    } else if (counter === 1) {
      return <span>One</span>
    } else {
      return <span>{counter}</span>
    }
  }

  return <h2>Counter {formatZero()}</h2>
}

export default Counter
