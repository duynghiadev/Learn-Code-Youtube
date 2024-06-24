import { store } from '../store/store'

const Button = (props) => {
  const { callbackForceRender } = props

  const handleIncrement = () => {
    store.increment()

    // force app re-render
    callbackForceRender()
  }

  return <button onClick={handleIncrement}>Increment</button>
}

export default Button
