import { createContext, useState } from 'react'

const UserContext = createContext({ name: '', auth: false })

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: '',
    account: {}
  })

  const loginContext = (name) => {
    setUser((user) => ({
      name: name,
      auth: true
    }))
  }

  const logout = (userData) => {
    setUser(userData)
  }

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>{children}</UserContext.Provider>
  )
}

export { UserContext, UserProvider }
