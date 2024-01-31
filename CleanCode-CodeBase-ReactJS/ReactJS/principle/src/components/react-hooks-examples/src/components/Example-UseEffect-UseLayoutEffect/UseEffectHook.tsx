import React, { useState, useEffect } from 'react'

/**
 * - The provided component, when executed, causes the page to display a series of random numbers upon clicking the div. If you continuously click, you'll notice that the numbers flicker. The reason behind this behavior is that each time you click the div, count is updated to 0, and then within the useEffect, it's set to a series of random numbers again.
 *
 * - Therefore, the page first renders 0, then quickly renders the random numbers. Due to the rapid updates, the flickering effect occurs.
 */

const UseEffectExample: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (count === 0) {
      const randomNum: number = 10 + Math.random() * 200
      setCount(randomNum)
    }
  }, [count])

  return <h5 onClick={() => setCount(0)}>{count}</h5>
}

export default UseEffectExample
