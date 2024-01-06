/**
 * - The flickering has disappeared.
 * + Compared to using useEffect, when you click the div and count is updated to 0, the page does not immediately render. Instead, it waits for the internal state modification in useLayoutEffect before updating the page.Therefore, the page doesn't flicker.
 *
 * - Summary:
 * + useLayoutEffect can solve some scenarios of page flickering by synchronously executing state updates.
 * + useEffect is suitable for 99% of scenarios, and useLayoutEffect may block rendering, so use it cautiously.
 */
import React, { useState, useLayoutEffect } from 'react'

const UseLayoutEffectExample: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  useLayoutEffect(() => {
    if (count === 0) {
      const randomNum: number = 10 + Math.random() * 200
      setCount(randomNum)
    }
  }, [count])

  return <h5 onClick={() => setCount(0)}>{count}</h5>
}

export default UseLayoutEffectExample
