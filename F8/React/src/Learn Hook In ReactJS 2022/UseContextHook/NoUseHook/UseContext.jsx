import { useState } from 'react'
import Content from './Content'

const UseContext = () => {
  // Context
  // CompA => CompB => CompC

  // Theme: Dark/Light

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content theme={theme} />
    </div>
  )
}

export default UseContext
