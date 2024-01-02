// Header.tsx
import React from 'react'
import './Header.scss'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  console.log(`title from component Header: ${title}`)
  console.log(`subtitle from component Header: ${subtitle}`)

  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <p className='header__subtitle'>{subtitle}</p>
    </header>
  )
}

export default Header
