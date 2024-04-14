import { memo, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Label = memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  console.log('label re-render')

  return (
    <label>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      Use dark mode
    </label>
  )
})
