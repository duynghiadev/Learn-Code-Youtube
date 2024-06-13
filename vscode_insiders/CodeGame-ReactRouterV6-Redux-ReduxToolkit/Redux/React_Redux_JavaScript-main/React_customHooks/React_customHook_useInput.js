import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  return [
    {
      background: 'red',
      height: '100px',
      width: value + 'px'
    },
    {
      value,
      onChange: (e) => {
        setValue(+e.target.value)
      }
    }
  ]
}

export default useInput
