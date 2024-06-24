import { createContext, useState } from 'react'
import Counter from './components/store global/Counter'

export const ForceRenderContext = createContext()

const App_2 = () => {
  const [forceRender, setForceRender] = useState(false)

  const callbackForceRender = () => {
    setForceRender(!forceRender)
  }

  return (
    <ForceRenderContext.Provider value={{ callbackForceRender: callbackForceRender }}>
      <div className='App'>
        <p>This is App_2</p>
        <Counter />
      </div>
    </ForceRenderContext.Provider>
  )
}

export default App_2
