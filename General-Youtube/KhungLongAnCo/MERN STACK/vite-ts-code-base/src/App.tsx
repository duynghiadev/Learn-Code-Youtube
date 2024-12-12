import { MainRouter } from 'routes'
import { store } from 'store'
import { Provider } from 'react-redux'

import './styles/index.css'
import { useInit } from 'hooks'

function App() {
  const { inited } = useInit()
  if (!inited) {
    return <div>Loading ...</div>
  }
  return (
    <Provider store={store}>
      <div className='bg-baseBackground h-[100vh] w-[100vw]'>
        <MainRouter />
      </div>
    </Provider>
  )
}

export default App
