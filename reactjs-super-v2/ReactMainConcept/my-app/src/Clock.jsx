import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']

const fetchApi = () => {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

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
      name: this.props.name,
      lists: []
    }
    this.date = '22/8/2022'
    this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log('seconds:', seconds)

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
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
    console.log('this.props:', this.props)
    console.log('this.state:', this.state)

    return (
      <div>
        <h1>Hello, world! {this.state.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}</h2>

        <h3>Is is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
