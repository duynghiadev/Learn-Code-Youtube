import { useEffect, useState } from 'react'
import '../css/useEffect.css'

const UseEffect = () => {
  const [dataType, setDataType] = useState('posts')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 5)))
  }, [dataType])

  return (
    <div className='container'>
      <div>
        <h1>useEffect hook</h1>

        <button onClick={(e) => setDataType('posts')}>Posts</button>
        <button onClick={(e) => setDataType('comments')}>Comments</button>
        <button onClick={(e) => setDataType('users')}>Users</button>

        <div>
          <h3>Result:</h3>
          {/* Data */}
          {JSON.stringify(data)}
        </div>
      </div>
    </div>
  )
}

export default UseEffect
