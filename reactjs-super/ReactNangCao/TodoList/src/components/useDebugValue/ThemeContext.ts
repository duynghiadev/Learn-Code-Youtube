import { createContext } from 'react'
import { ThemeType } from './Welcome'

export const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})
