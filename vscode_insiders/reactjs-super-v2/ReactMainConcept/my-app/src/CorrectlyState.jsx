import React from 'react'

const fetchComments = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['A', 'B', 'C'])
    }, 1000)
  })

class CorrectlyState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comments: []
    }
  }

  componentDidMount() {
    console.log('render component CorrectlyState use componentDidMount')

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

    // Mình truyền nguyên 1 cái object với các thuộc tính giống như cái state ban đầu
    // React class component có tính năng merge state
    fetchComments().then((res) => {
      this.setState({
        comments: res
      })
    })
  }

  render() {
    console.log('this.state.count in component CorrectlyState ==>', this.state.count)
    console.log('this.state in component CorrectlyState ==>', this.state)

    return (
      <div>
        <div>CorrectlyState: Count: {this.state.count}</div>
      </div>
    )
  }
}

export default CorrectlyState
