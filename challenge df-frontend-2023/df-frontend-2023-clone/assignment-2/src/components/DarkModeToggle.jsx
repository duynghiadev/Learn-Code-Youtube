import React from 'react'
import '../assets/styles/toggle.css'
import { useTheme } from '../contexts/ThemeProvider'

// @see: https://www.joshwcomeau.com/react/dark-mode/
const DarkModeToggle = () => {
  const { colorMode, setColorMode } = useTheme()

  if (!colorMode) {
    return null
  }

  return (
    <label className="switch-container">
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? 'dark' : 'light')
        }}
      />
      <span className="slider"></span>
    </label>
  )
}

export default DarkModeToggle
