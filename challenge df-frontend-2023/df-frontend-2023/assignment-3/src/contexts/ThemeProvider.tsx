import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeMode } from '../types/common.type'
import { COLORS } from '../utils/constants'
import { getInitialColorMode } from '../utils/functions/common'

interface ThemeContextProps {
  colorMode: ThemeMode
  setColorMode: (newValue: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  colorMode: 'light',
  setColorMode: () => {},
})

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, rawSetColorMode] = useState<ThemeMode>(getInitialColorMode)

  const updateColorMode = (newValue: ThemeMode) => {
    const root = window.document.documentElement

    const colorProperties = {
      '--color-text': 'text',
      '--color-background': 'background',
      '--color-primary': 'primary',
      '--color-toggle-background': 'toggle',
    }

    for (const [property, colorType] of Object.entries(colorProperties)) {
      root.style.setProperty(
        property,
        newValue === 'light' ? COLORS.light[colorType] : COLORS.dark[colorType],
      )
    }
  }

  const setColorMode = useCallback((newValue: ThemeMode) => {
    // 1. Update React color-mode state
    rawSetColorMode(newValue)
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue)
    // 3. Update each color
    updateColorMode(newValue)
  }, [])

  useEffect(() => {
    updateColorMode(colorMode)
  }, [colorMode])

  const contextValue = useMemo(
    () => ({
      colorMode,
      setColorMode,
    }),
    [colorMode, setColorMode],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
