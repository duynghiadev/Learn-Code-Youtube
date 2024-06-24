import { useContext } from 'react'
import { store } from '../store/store'
import { ForceRenderContext } from '../../App_2'

const Button = () => {
  const forceRenderStore = useContext(ForceRenderContext)

  console.log('forceRenderStore:', forceRenderStore)

  const handleIncrement = () => {
    store.increment()

    // force app re-render
    forceRenderStore.callbackForceRender()
  }

  return <button onClick={handleIncrement}>Increment</button>
}

export default Button
