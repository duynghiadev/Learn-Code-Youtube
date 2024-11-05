import React from 'react'
import Container from './Container'
import IMAGES from '../assets/images'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header__wrapper">
          <div className="logo">
            <a href="/">Bookstore</a>
          </div>

          <div className="header__right">
            <DarkModeToggle />
            <div className="user">
              <div className="user__image">
                <img src={IMAGES.user} alt="logo" />
              </div>
              <div className="user__name">Duy Nghia Dev</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
