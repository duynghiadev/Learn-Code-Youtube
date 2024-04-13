import { useState } from 'react'

export default (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggle = () => {
    setValue(!value)
  }
  return [value, toggle]
}
