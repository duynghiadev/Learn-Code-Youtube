// Header.tsx
import React from 'react'
import './Header.scss'

interface HeaderProps {
  title: string
  subtitle: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className }) => {
  return (
    <header className={`header ${className}`}>
      <h1 className='header__title'>{title}</h1>
      <p className='header__subtitle'>{subtitle}</p>
    </header>
  )
}

export default Header
