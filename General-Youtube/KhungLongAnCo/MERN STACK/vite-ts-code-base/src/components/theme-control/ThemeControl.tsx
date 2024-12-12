import { Themes } from 'defines'
import { useState } from 'react'

export const ThemeControl = () => {
  const [curtentTheme, setCurentTheme] = useState(Themes.LIGHT)
  const changeTheme = (theme: Themes) => {
    setCurentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  return (
    <div>
      {curtentTheme === Themes.DARK ? (
        <button onClick={() => changeTheme(Themes.LIGHT)}>Change Theme Light</button>
      ) : (
        <button onClick={() => changeTheme(Themes.DARK)}>Change Theme Dark</button>
      )}
    </div>
  )
}
