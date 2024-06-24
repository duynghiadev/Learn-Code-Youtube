import { store } from '../store/store'

const Button = () => {
  const handleIncrement = () => {
    store.increment()
  }

  return <button onClick={handleIncrement}>Increment</button>
}

export default Button
