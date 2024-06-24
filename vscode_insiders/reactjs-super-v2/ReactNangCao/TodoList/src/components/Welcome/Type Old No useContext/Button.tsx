import React from 'react'

export const Button = ({ children }: { children: React.ReactNode }) => {
  console.log('render button')
  const theme = { color: 'light' }
  const className = 'button-' + theme?.color

  return <button className={className}>{children}</button>
}
