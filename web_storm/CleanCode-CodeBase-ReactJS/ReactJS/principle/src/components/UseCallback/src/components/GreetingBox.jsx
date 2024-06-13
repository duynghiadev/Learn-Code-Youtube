import { useState, useEffect } from 'react'

const GreetingBox = ({ getGreeting }) => {
  const [greeting, setGreeting] = useState()
  console.log(`greeting: ${greeting}`)

  useEffect(() => {
    setGreeting(getGreeting())
    console.log('GreetingBox: useEffect has data:', getGreeting())
  }, [getGreeting])

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default GreetingBox
