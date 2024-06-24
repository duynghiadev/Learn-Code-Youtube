import { useContext } from 'react'
import { Context } from './contextProvider'

const ComponentC = () => {
  const { message } = useContext(Context)
  console.log('message from ComponentC:', message)

  return (
    <div
      className='component small'
      style={{
        width: '300px',
        height: '200px',
        border: '1px solid red',
        padding: '1rem'
      }}
    >
      <h1>C</h1>
      <p>{message}</p>
    </div>
  )
}

export default ComponentC
