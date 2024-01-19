import { useRef } from 'react'

const UseRefHook = () => {
  const inputRef = useRef()
  const outputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputRef.current.value)
    // inputRef.current.value = 'Good bye'
    inputRef.current.style.color = 'red'

    outputRef.current.innerText = inputRef.current.value
  }

  return (
    <div className='App'>
      <h1>useRef</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type='text' id='username' name='username' ref={inputRef} />
        <button type='submit'>Submit</button>
      </form>
      <p ref={outputRef}>This is a text</p>
    </div>
  )
}

export default UseRefHook
