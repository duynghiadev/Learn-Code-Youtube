import { createContext, useCallback, useMemo, useState } from 'react'
import { Form } from './Form'
import { Label } from './Label'
import './welcome.css'
import { ThemeContext } from './ThemeContext'

export interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

export default function WelcomeNew() {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const [, forceRender] = useState({})

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <div>
        <button onClick={pleaseRender}>Please Render Welcome</button>
      </div>
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  )
}
