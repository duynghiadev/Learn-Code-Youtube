/**
 * Trong ví dụ này, useEffect được gọi sau khi component đã được render, trong khi useLayoutEffect được gọi sau khi DOM đã được vẽ, trước khi component được render. */

import React, { useEffect, useLayoutEffect, useState } from 'react'

const ExampleComponent = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log('useEffect: Component is rendered')
  }, [width])

  useLayoutEffect(() => {
    console.log('useLayoutEffect: DOM is painted')
  }, [width])

  return (
    <div>
      <h1>Example useLayoutEffect hook</h1>
      <p>Width: {width}px</p>
      <button onClick={() => setWidth(width + 50)}>Increase Width</button>
      <hr />
    </div>
  )
}

export default ExampleComponent
