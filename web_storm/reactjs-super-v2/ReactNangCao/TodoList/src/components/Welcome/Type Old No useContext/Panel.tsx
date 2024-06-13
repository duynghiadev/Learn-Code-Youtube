import React from 'react'

export const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const theme = { color: 'light' }
  const className = 'panel-' + theme?.color

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
