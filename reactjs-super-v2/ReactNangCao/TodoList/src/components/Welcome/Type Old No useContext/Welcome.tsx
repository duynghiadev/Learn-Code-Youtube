import { useState } from 'react'
import { Form } from './Form'
import { Label } from './Label'
import './welcome.css'

export interface ThemeType {
  color: 'light' | 'dark'
}

export default function WelcomeOld() {
  const [theme, setTheme] = useState<ThemeType>({ color: 'light' })

  const onChangeTheme = (color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }

  return (
    <div className='welcome'>
      <Form />
      <Label theme={theme} onChangeTheme={onChangeTheme} />
    </div>
  )
}
