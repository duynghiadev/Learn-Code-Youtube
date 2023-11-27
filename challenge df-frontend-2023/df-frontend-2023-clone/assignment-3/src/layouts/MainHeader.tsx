import React from 'react'
import Logo from '../assets/logo.png'
import Avatar from '../assets/avatar.png'
import ThemeToggle from '../components/ThemeToggle'
import { useTheme } from '../theme/ThemeContext'

function MainHeader() {
  const { toggleTheme } = useTheme()

  return (
    <div className="header">
      <div className="headerLeft">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="logo" />
          Bookstore
        </a>
      </div>
      <div className="headerRight">
        <ThemeToggle toggleTheme={toggleTheme} />
        <a
          href="https://github.com/nghianm2803"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Avatar} alt="avatar" className="avatar" />
          Du Xa Xiu
        </a>
      </div>
    </div>
  )
}

export default MainHeader
