import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

function UseContext() {
  const [username, setUsername] = useState('')
  console.log('username:', username)

  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <h1>useContext hook</h1>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  )
}

export default UseContext
