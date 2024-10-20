import { useState, useEffect } from 'react'

export default function List() {
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
            </p>
          )
        })}
    </div>
  )
}
