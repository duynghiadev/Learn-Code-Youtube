'use client'

import { useEffect, useState } from 'react'

import { getLocalStorageItem, setLocalStorageItem } from '@/src/lib/utils'

type IThemeMode = string | 'dark' | 'light'
enum THEME_MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export default function ThemeSwitch() {
  const storedTheme = getLocalStorageItem('themeMode')
  const [themeMode, setThemeMode] = useState<IThemeMode>(storedTheme)

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('!transition-none')
    }, 100)
  }, [])

  useEffect(() => {
    setLocalStorageItem('themeMode', themeMode)

    if (themeMode === THEME_MODE.DARK) {
      document.cookie = `themeMode=${THEME_MODE.DARK};path=/;`
      document.documentElement.classList.add(THEME_MODE.DARK)
    } else {
      document.cookie = `themeMode=${THEME_MODE.LIGHT};path=/;`
      document.documentElement.classList.remove(THEME_MODE.DARK)
    }
  }, [themeMode])

  const toggleTheme = () =>
    setThemeMode((mode: IThemeMode) =>
      mode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK,
    )

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full border-0 bg-amber-700 p-2 text-xl leading-none shadow-[0_0_.5rem_-.125rem] shadow-black transition-colors dark:bg-slate-900 dark:shadow-[0_0_.5rem_0] dark:shadow-white"
    >
      <div className="theme-switch__light dark:-translate-x-1/2 dark:translate-y-1/2 dark:scale-50 dark:opacity-0">
        ☀️
      </div>
      <div className="theme-switch__dark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 dark:opacity-100">
        🌙
      </div>
    </button>
  )
}
