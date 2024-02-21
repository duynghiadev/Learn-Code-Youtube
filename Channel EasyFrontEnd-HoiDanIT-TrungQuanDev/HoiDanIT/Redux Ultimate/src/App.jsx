import './App.css'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from './action/actions'
import store from './redux/store'
import { useSelector, useDispatch } from 'react-redux'

const App = (props) => {
  // chúng ta có thể thay thế mapStateToProps, mapDispatchToProps bằng hook useSelector và useDispatch
  const newCount = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  // Event handler --> Người xử lý dự kiện
  const handleIncrease = () => {
    // dispatch actions
    // props.increaseCounter_1() // the write way outdated

    // bên trong dispatch là 1 action -> action là 1 function
    dispatch(increaseCounter())

    // fire dispatch
    // store.dispatch({
    //   type: 'test',
    //   payload: { name: 'test' }
    // })
  }

  const handleDecrease = () => {
    // props.decreaseCounter()

    // bên trong dispatch là 1 action -> action là 1 function
    dispatch(decreaseCounter())
  }

  return (
    <div className='App'>
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>
      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  )
}

// lấy state trong store của redux -> sau đó map vào react thông quan props -> state đó là 1 biến
// map state (redux store) + props react -> Tóm lại, thằng này nó giúp chúng ta lấy ra được store trong redux và nó trả về state cho chúng ta -> map state của thằng redux và nhúng vào props của thằng react
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count, // Lưu ý: state đó là state của redux, không phải của react nhé
//     abc: state.counter.name
//   }
// }

// // map dispatch của thằng redux, và thêm nó vào props của thằng react -> props đó là 1 function
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter_1: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter())
//   }
// }

// nhớ phải có keyword connect thì nó mới chạy nhé -> nó giống như higher order component trong react
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
