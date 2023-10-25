import { useRef } from 'react'

function FormRef() {
  const ref = useRef(null)

  const onChange = () => {
    const file = inputRef.current.files[0]
    console.log(file.name)
  }

  return <input type='file' ref={ref} onChange={onChange} />
}

export default FormRef
