import { useState, createContext } from 'react'
import ContentCopy from './ContentCopy'

export const ThemeContext = createContext()
console.log(`ThemeContext: ${ThemeContext}`)

const UseContextVersion2 = () => {
  /**
   * 1. Create Context
   * 2. Provider
   * 3. Consumer
   */

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <ContentCopy />
      </div>
    </ThemeContext.Provider>
  )
}

export default UseContextVersion2
