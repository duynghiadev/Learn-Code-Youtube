import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect() {
  const [data, setData] = useState('')
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
      setData(response.data[Math.floor(Math.random() * 100)].email)
      console.log('API Called in component UseEffects')
    })
  }, [refresh])

  return (
    <div>
      <strong>This is a useEffect hook 👇</strong>
      <h1>Hello {data}</h1>
      <button onClick={() => setRefresh(!refresh)}>refresh</button>
    </div>
  )
}

export default UseEffect
