import { useContext } from 'react'
import { store } from '../store/store'
import { ForceRenderContext } from '../../App_2'

const ButtonDecrement = () => {
  const forceRenderStore = useContext(ForceRenderContext)

  const handleDecrement = () => {
    // thay đổi state trên store
    store.decrement()

    // force app re-render
    forceRenderStore.callbackForceRender()
  }

  return <button onClick={handleDecrement}>Decrement</button>
}

export default ButtonDecrement
