import { useRef } from 'react'
import Input from './Input'

const AutoInput = () => {
  const funcInputRef = useRef<{ type: () => void }>({
    type: () => {}
  })

  const handleClick = () => {
    funcInputRef.current.type()
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Click to type</button>
      </div>
      <Input ref={funcInputRef} />
    </div>
  )
}

export default AutoInput
