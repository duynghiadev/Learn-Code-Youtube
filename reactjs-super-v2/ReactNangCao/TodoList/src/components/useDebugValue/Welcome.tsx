import { useCallback, useDebugValue, useMemo, useState } from 'react'
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

const doTask = (value: any) => {
  for (let i = 0; i < 99999; i++) {
    return value === 'light' ? 'theme is light' : 'theme is dark'
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  useDebugValue(theme.color, doTask)

  return {
    theme,
    onChangeTheme
  }
}

export default function WelcomeUseDebugValue() {
  const { theme, onChangeTheme } = useTheme()
  const [, forceRender] = useState({})

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <h2 style={{ textAlign: 'center' }}>This is lession learn about hooks useDebugValue</h2>
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
