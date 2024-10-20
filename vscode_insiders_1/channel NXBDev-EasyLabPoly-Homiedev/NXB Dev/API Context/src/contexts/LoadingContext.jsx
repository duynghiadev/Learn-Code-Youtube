import { createContext, useState } from 'react'

const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const setLoading = (status) => {
    setIsLoading(status)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>{children}</LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingProvider }
