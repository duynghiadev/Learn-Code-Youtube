import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const InputField = forwardRef(({ value, name, label, className, onChange, ...rest }, ref) => {
  const handleChange = (event) => {
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
})

InputField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputField
