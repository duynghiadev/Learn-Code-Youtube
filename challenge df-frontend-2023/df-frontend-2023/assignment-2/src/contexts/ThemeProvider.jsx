import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { COLORS } from '../utils/constants'
import { getInitialColorMode } from '../utils/functions/common'

export const ThemeContext = createContext()

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode)

  const updateColorMode = (newValue) => {
    const root = window.document.documentElement

    root.style.setProperty(
      '--color-text',
      newValue === 'light' ? COLORS.light.text : COLORS.dark.text,
    )
    root.style.setProperty(
      '--color-background',
      newValue === 'light' ? COLORS.light.background : COLORS.dark.background,
    )
    root.style.setProperty(
      '--color-primary',
      newValue === 'light' ? COLORS.light.primary : COLORS.dark.primary,
    )
    root.style.setProperty(
      '--color-toggle-background',
      newValue === 'light' ? COLORS.light.toggle : COLORS.dark.toggle,
    )
  }

  const setColorMode = (newValue) => {
    // 1. Update React color-mode state
    rawSetColorMode(newValue)
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue)
    // 3. Update each color
    updateColorMode(newValue)
  }

  useEffect(() => {
    updateColorMode(colorMode)
  }, [])

  const contextValue = useMemo(
    () => ({
      colorMode,
      setColorMode,
    }),
    [colorMode],
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
