import React from 'react'
import './Header.scss'

interface Props {
  text: string
}

const Header: React.FC<Props> = ({ text }) => (
  <header className={`header ${text === 'Large' ? 'large' : ''}`}>
    <h3>{text}</h3>
  </header>
)

export default Header
