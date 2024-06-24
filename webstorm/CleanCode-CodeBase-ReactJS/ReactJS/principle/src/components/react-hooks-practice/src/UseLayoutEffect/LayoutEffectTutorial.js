import { useLayoutEffect, useEffect, useRef } from 'react'

function LayoutEffectTutorial() {
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    console.log('inputRef.current.value in component LayoutEffectTutorial:', inputRef.current.value)
  }, [])

  useEffect(() => {
    inputRef.current.value = 'HELLO'
  }, [])

  return (
    <div className='App'>
      <h1>useLayoutEffect hook</h1>
      <input ref={inputRef} value='PEDRO' style={{ width: 400, height: 60 }} />
      <hr />
    </div>
  )
}

export default LayoutEffectTutorial
