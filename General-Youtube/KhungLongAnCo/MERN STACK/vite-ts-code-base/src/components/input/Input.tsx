import { FC, InputHTMLAttributes } from 'react'
import './input.css'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  isRequired?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export const Input: FC<ButtonProps> = ({ error, type, className, isRequired, label, register, name, ...rest }) => {
  return (
    <div>
      {label ? (
        <label className='block'>
          {isRequired ? <span className='text-red-800'>*</span> : null}
          {label}
        </label>
      ) : null}
      <input className={`input ${className}`} type={type} {...register(name)} {...rest} />
      {error ? <div className='text-red-800'>{error}</div> : null}
    </div>
  )
}
