import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      name: this.props.name
    }
    this.date = '22/8/2022'
    this.getTime = this.getTime.bind(this)
  }

  getTime() {
    // previousState.time !== newState.time
    // previousState.time.created !== newState.time.created

    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: { created: new Date().getSeconds() }
    }
    this.setState(newState)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Hello, world! {this.state.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>

        <h3>Is is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
