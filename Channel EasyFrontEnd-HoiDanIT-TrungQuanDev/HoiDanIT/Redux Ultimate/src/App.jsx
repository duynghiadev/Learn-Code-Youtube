import './App.css'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from './action/actions'
import store from './redux/store'

const App = (props) => {
  // Event handler --> Người xử lý dự kiện
  const handleIncrease = () => {
    // dispatch actions
    props.increaseCounter_1() // the write way outdated

    // fire dispatch
    // store.dispatch({
    //   type: 'test',
    //   payload: { name: 'test' }
    // })
  }

  const handleDecrease = () => {
    props.decreaseCounter()
  }

  return (
    <div className='App'>
      <div>Count: {props.count}</div>
      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter_1: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
