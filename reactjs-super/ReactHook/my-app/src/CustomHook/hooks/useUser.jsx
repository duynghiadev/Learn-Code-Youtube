import { useEffect, useState } from 'react'
import { getUser } from '../api'

export const useUser = (value) => {
  const [user, setUser] = useState(value)

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data)
    })
  }, [])

  return { user }
}
