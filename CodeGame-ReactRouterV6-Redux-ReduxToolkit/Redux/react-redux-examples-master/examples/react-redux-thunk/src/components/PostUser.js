import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostUser extends Component {
  render() {
    const { user } = this.props
    if (!user) {
      return null
    }
    return (
      <cite>by {user.name}</cite>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId )
  }
}

export default connect(mapStateToProps)(PostUser)