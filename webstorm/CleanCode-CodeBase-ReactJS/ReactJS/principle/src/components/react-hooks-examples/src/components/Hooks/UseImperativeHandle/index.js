import React, { useRef, useState } from 'react'
import ElaborateInput from './ElaborateInput'

const UseImperativeHandle = () => {
  const [city, setCity] = useState('Seattle')
  const [state, setState] = useState('WA')
  const [error, setError] = useState('')

  const cityEL = useRef()
  const stateEL = useRef()

  function validate() {
    if (!/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(city)) {
      setError('city')
      cityEL.current.focus()
      return
    }

    if (!/^[A-Z]{2}$/.test(state)) {
      setError('state')
      stateEL.current.focus()
      return
    }
    setError('')
    alert('valid form')
  }

  return (
    <div>
      <h1>useImperativeHandle Example</h1>
      <ElaborateInput
        hasError={error === 'city'}
        placeholder={'city'}
        value={city}
        update={setCity}
        ref={cityEL}
      />

      <ElaborateInput
        hasError={error === 'state'}
        placeholder={'state'}
        value={state}
        update={setState}
        ref={stateEL}
      />

      <button onClick={validate}>Validate</button>
    </div>
  )
}

export default UseImperativeHandle
