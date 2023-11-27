import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react'

// Define the type for the context value
interface ThemeContextType {
  isDarkTheme: any
  toggleTheme: () => void
}

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const setTheme = (isDarkTheme: boolean) => {
  try {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
  } catch (error) {
    console.error('Set theme from localStorage error:', error)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark'
  })

  useEffect(() => {
    setTheme(isDarkTheme)
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  const contextValue = useMemo(
    () => ({ isDarkTheme, toggleTheme }),
    [isDarkTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
