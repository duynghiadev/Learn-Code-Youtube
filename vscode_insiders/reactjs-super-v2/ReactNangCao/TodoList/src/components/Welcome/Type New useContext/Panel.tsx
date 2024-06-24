import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'panel-' + theme.color

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
