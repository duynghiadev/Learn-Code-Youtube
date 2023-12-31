import React from 'react'
import './Header.scss' // Import file SCSS

interface HeaderProps {
  isDarkMode: boolean
  onToggleDarkMode: () => void
  user: string
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode, user }) => {
  return (
    <header className='app-header'>
      {' '}
      {/* Thêm class "app-header" */}
      <h1>My App</h1>
      <div>
        <span>User: {user}</span>
        <button onClick={onToggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </header>
  )
}

export default Header
