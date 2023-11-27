import PropTypes from 'prop-types'
import React from 'react'

const SelectField = ({ options, name, label, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select className="input-field" id={name} name={name} required="" {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default SelectField
