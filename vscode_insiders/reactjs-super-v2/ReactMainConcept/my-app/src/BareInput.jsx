import PropTypes from 'prop-types'
import React from 'react'

// class component

// class BareInput extends React.Component {
// const {type, ...rest} = this.props
//
//   render() {
//     return <input {...rest} />
//   }
// }

// function component

const BareInput = (props) => {
  const { type: typeInput, ...rest } = props

  return <input {...rest} type={typeInput} />
}

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string
}

export default BareInput
