'use client'

import { saveToLocalStorage } from '@/app/function/localStorage'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ThemeColors {
  text: string
  bgColor: string
  backgroundElm: string
  primary: string
  border: string
}
const COLORS: Record<string, ThemeColors> = {
  light: {
    text: '#343a40',
    bgColor: '#f8f9fa',
    backgroundElm: 'white',
    primary: '#e23c5f',
    border: '#adb5bd',
  },
  dark: {
    text: 'white',
    bgColor: '#1a1a1a',
    backgroundElm: '#333333',
    primary: '#e23c5f',
    border: 'white',
  },
}

const updateColor = (value: ThemeType) => {
  const root = document.documentElement

  root.style.setProperty(
    '--bgColor',
    value === 'light' ? COLORS.light.bgColor : COLORS.dark.bgColor,
  )
  root.style.setProperty(
    '--text',
    value === 'light' ? COLORS.light.text : COLORS.dark.text,
  )
  root.style.setProperty(
    '--primary',
    value === 'light' ? COLORS.light.primary : COLORS.dark.primary,
  )
  root.style.setProperty(
    '--border',
    value === 'light' ? COLORS.light.border : COLORS.dark.border,
  )
  root.style.setProperty(
    '--backgroundElm',
    value === 'light' ? COLORS.light.backgroundElm : COLORS.dark.backgroundElm,
  )
}

const initialState: { mode: ThemeType } = {
  mode: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor: (state, actions: PayloadAction<ThemeType>) => {
      state.mode = actions.payload
      updateColor(actions.payload)
      saveToLocalStorage('color-mode', actions.payload)
    },
  },
})

export const { setColor } = themeSlice.actions
export default themeSlice.reducer
