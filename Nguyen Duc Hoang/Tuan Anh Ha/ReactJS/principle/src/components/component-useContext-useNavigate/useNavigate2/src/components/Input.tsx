import React, { ChangeEvent } from 'react'
import './Input.scss'

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ value, onChange }) => (
  <input
    className={`input ${value === 'Large' ? 'large' : ''}`}
    value={value}
    onChange={onChange}
  />
)

export default Input
