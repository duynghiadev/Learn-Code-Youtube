import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'error' | 'info' | 'primary' | 'warning'
  size?: 'small' | 'large'
}
