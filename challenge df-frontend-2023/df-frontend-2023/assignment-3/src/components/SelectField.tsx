import React from 'react'

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
  label: string
}

function SelectField({ options, name, label, ...rest }: SelectFieldProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select className="input-field" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default SelectField
