import { api } from 'apis/api'
import { STORAGE } from 'defines'
import { useEffect, useState } from 'react'

export const useInit = () => {
  const [inited, setInited] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem(STORAGE.ACCESS_TOKEN)
    if (token) {
      api.setToken(token)
    }
    setInited(true)
  }, [])
  return { inited }
}
