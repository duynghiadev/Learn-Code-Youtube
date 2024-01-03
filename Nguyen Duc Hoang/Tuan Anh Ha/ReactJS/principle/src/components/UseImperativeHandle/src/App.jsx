import { useRef, useState } from 'react'
import CustomInput from './CustomInput'

function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef()

  return (
    <>
      <CustomInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.alertValue()}>Alert</button>
    </>
  )
}

export default App
