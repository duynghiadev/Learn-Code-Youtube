import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

export default function CustomHookDemo() {
  const [data1] = useFetch('https://jsonplaceholder.typicode.com/todos')
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='container-md'>
      {data &&
        data.map((item) => {
          return (
            <p className='todo' key={item.id}>
              {item.title}
              <hr />
              <span style={{ color: 'red' }}>OK</span>
            </p>
          )
        })}
      {data1 &&
        data1.map((item) => {
          return (
            <p className='todo' key={item.id}>
              {item.title}
              <hr />
              <span style={{ color: 'red' }}>Duy Nghia Dev</span>
            </p>
          )
        })}
    </div>
  )
}
