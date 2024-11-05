import { useEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)

  useEffect(() => {
    console.log('Run 1 time')
    intervalRef.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1)
      console.log('setInterval running')
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      console.log('Watch timer unmount')
    }
  }, [])

  return <div>Watch: {seconds}</div>
}

const Watch = () => {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>
      <button onClick={() => setVisible((prevState) => !prevState)}>Set visible watch timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}

export default Watch
