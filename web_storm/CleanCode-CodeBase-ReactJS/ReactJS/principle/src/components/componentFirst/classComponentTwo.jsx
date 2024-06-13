import React, { Component } from 'react'

class ComplexLifecycleComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('Component did mount')
    // Thực hiện các tác vụ sau khi component được render lần đầu tiên
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update')
    // Thực hiện các tác vụ sau mỗi lần state hoặc props thay đổi
  }

  componentWillUnmount() {
    console.log('Component will unmount')
    // Thực hiện các tác vụ trước khi component bị xóa khỏi DOM
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    console.log('Render')
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default ComplexLifecycleComponent
