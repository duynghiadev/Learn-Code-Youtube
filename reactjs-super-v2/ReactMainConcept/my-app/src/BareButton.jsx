import React from 'react'

class BareButton extends React.Component {
  // Techniques normal (basic)
  handleClick = (value) => {
    console.log(value)
  }

  // Techniques advanced
  // this is Currying in JavaScript ==> type 1 (short)
  handleClick_1 = (value) => () => {
    console.log(value)
  }

  // this is Currying in JavaScript ==> type 2 (longer)
  handleClick_2 = (value) => {
    console.log('run first time =>:', value)
    return () => {
      console.log(value)
    }
  }

  render() {
    return (
      <div>
        {/* type normal */}
        <button onClick={() => this.handleClick('add')}>Add</button>
        <button onClick={() => this.handleClick('edit')}>Edit</button>
        <button onClick={() => this.handleClick('delete')}>Delete</button>

        {/* type advanced */}
        <button onClick={this.handleClick_1('add advanced')}>Add advanced</button>
        <button onClick={this.handleClick_1('edit advanced')}>Edit advanced</button>
        <button onClick={this.handleClick_1('delete advanced')}>Delete advanced</button>
      </div>
    )
  }
}

export default BareButton
