import UseEffect from '../components/UseEffect'
import { useEffect, useState } from 'react'

function App() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }, [])

  console.log('hide all comment 🙈')

  return <>{visible ? <UseEffect /> : null}</>
}

export default App
