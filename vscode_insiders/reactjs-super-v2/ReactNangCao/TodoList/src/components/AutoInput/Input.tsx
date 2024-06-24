import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const Input = forwardRef<{ type: () => void }>((props, ref) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const type = () => {
    let numberIndex = 0
    const initalString = 'Lê Nguyễn Duy Nghĩa'
    inputRef.current?.focus()

    let interval: any = setInterval(() => {
      setValue(initalString.slice(0, numberIndex))
      if (numberIndex === initalString.length) {
        return clearInterval(interval)
      }
      numberIndex++
    }, 100)
  }

  useImperativeHandle(ref, () => {
    return {
      type
    }
  })

  return <input type='text' placeholder='type something' value={value} onChange={() => {}} ref={inputRef} />
})

export default Input
