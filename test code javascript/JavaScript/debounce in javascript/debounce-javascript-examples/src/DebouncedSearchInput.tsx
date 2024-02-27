import React, { useEffect, useRef, useState } from 'react'

function runSearchQuery(value: string) {
  return fetch('?search=' + value)
}

const DebouncedSearchInput = () => {
  const [value, setValue] = useState('')
  const timeoutId = useRef<number>()
  const [requests, setRequests] = useState<string[]>([])

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = window.setTimeout(async () => {
      const res = await runSearchQuery(value)
      const text = res.text()
      setRequests((prevRequests) => [...prevRequests, '?search=' + value])
    }, 500)

    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [value])

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <div style={{ direction: 'ltr', padding: 10 }}>
      <h4>This is debounce in React + TypeScript</h4>
      <input onKeyUp={handleKeyUp} width={200} style={{ padding: 20 }} />
      <h2>requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>{request}</li>
        ))}
      </ul>
    </div>
  )
}

export default DebouncedSearchInput
