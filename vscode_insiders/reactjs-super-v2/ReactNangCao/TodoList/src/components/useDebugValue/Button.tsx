import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Button = ({ children }: { children: React.ReactNode }) => {
  console.log('render button')
  const { theme } = useContext(ThemeContext)
  const className = 'button-' + theme.color

  return <button className={className}>{children}</button>
}
