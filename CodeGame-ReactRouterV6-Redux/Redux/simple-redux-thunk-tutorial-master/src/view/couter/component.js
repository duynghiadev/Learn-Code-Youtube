import React from 'react'
import PropTypes from 'prop-types'
import Favicon from 'react-favicon';
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span>
        <h1>This is the number {this.props.number}</h1>
        {this.props.number > 1 ?
          <Favicon url="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" />
          : <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        }
        <RaisedButton onClick={this.props.increase}>+</RaisedButton>
        <RaisedButton onClick={this.props.decrease}>-</RaisedButton>
      </span>
    )
  }
}

export default Counter
