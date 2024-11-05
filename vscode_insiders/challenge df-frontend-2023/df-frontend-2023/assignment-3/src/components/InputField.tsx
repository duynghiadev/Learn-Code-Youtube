import React, { forwardRef } from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export type Ref = HTMLInputElement

const InputField = forwardRef<Ref, InputFieldProps>(
  ({ value, name, label, className, onChange, ...rest }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
    }

    return (
      <>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          ref={ref}
          type="text"
          name={name}
          id={name}
          className={`input-field ${className}`}
          placeholder="Search books"
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </>
    )
  },
)

export default InputField
