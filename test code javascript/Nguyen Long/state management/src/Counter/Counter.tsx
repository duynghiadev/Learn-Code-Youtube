import React from 'react'
import { store } from '../configureStore'
import { decrement, increment } from './actions'

interface CounterProps {}

interface CounterState {
  count: number
}

export default class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: store.getState().counter.count
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ count: store.getState().counter.count })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button className='decrement' onClick={this.handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button className='increment' onClick={this.handleIncrement}>
          +
        </button>
      </div>
    )
  }

  private handleIncrement() {
    increment(1)
  }

  private handleDecrement() {
    decrement(1)
  }
}
