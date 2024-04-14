import { memo, useContext, useId } from 'react'
import { ThemeContext } from './ThemeContext'

export const Label = memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  const id = useId()

  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
        id={id}
      />
      <label htmlFor={id}>Use dark mode</label>
    </div>
  )
})
