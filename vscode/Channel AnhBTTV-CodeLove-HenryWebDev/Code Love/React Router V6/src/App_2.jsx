import { useState } from 'react'
import Counter from './components/store global/Counter'

const App_2 = () => {
  const [forceRender, setForceRender] = useState(false)

  const callbackForceRender = () => {
    setForceRender(!forceRender)
  }

  return (
    <div className='App'>
      <p>This is App_2</p>
      <Counter callbackForceRender={callbackForceRender} />
    </div>
  )
}

export default App_2
