import { store } from '../store/store'

const CounterShow = () => {
  return <h2>Counter: {store.state.counter}</h2>
}

export default CounterShow
