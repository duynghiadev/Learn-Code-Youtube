import React from 'react'
import './cart.scss'
import { ContainerExtends, StyledButton } from './Cart.style'

export function Buttons({ isShow, className }) {
  return (
    <div className={className + 'buttons'}>
      <div
        className='button-item'
        style={{ backgroundColor: 'yellow', display: isShow ? 'inline-block' : 'none' }}
      >
        Hello
      </div>
    </div>
  )
}

export default function Cart({ isShow }) {
  return (
    <ContainerExtends className='container'>
      Cart
      <StyledButton isShow={isShow} />
    </ContainerExtends>
  )
}
