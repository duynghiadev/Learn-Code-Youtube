import PropTypes from 'prop-types'
import { Component } from 'react'

export class BoilingVerdict extends Component {
  render() {
    return (
      <div>{this.props.celsius >= 100 ? 'The water would boild' : 'The water not would boild'}</div>
    )
  }
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BoilingVerdict
