import { store } from '../store/store'

const ButtonDecrement = (props) => {
  const { callbackForceRender } = props

  const handleDecrement = () => {
    // thay đổi state trên store
    store.decrement()

    // force app re-render
    callbackForceRender()
  }

  return <button onClick={handleDecrement}>Decrement</button>
}

export default ButtonDecrement
