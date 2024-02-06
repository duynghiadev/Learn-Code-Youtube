import { useState } from 'react'
import '../css/useState.css'

const UseState = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({ name: '', password: '' })

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <br />

      <form>
        <h3>Form of useState</h3>

        <div className='row'>
          <h6>Name:</h6>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='User Name'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className='row'>
          <h6>Password:</h6>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <div className='row'>
          <h6>
            Name: <span>{data.name}</span>
          </h6>
        </div>
        <div className='row'>
          <h6>
            Password: <span>{data.password}</span>
          </h6>
        </div>
      </form>
    </div>
  )
}

export default UseState
