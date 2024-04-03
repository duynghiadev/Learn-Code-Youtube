import { createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{ message: 'Hello world' }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
