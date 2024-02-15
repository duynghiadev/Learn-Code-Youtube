import React from 'react'
import TextField from 'material-ui/TextField';

class Name extends React.Component {
  /* eslint-disable react/prop-types */
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  onChanged(e) {
    this.setState({ name: e.target.value })
  }

  update(e) {
    e.preventDefault()
    this.props.update(this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Name is {this.props.name}</h1>
        <form onSubmit={e => this.update(e)}>
          <TextField
            hintText="Carlos Santana"
            floatingLabelText="Enter Name"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
        </form>
      </div>
    )
  }
}

export default Name
