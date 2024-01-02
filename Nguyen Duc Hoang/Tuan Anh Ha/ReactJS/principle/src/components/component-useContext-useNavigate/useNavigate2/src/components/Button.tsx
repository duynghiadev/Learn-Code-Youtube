import React, { ButtonHTMLAttributes } from 'react'
import './Button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button'
}

const Button: React.FC<Props> = ({ type, children, ...props }) => (
  <Button type={type} {...props} className={`button ${props.className ?? ''}`}>
    {children}
  </Button>
)

export default Button
