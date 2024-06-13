import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './configureStore'
import Counter from './Counter/Counter'
import './App.css'

const App: React.FC = () => {
  useEffect(() => {
    const containerElement = document.getElementById('root')

    if (containerElement) {
      const root = ReactDOM.createRoot(containerElement)

      root.render(
        <React.StrictMode>
          <Counter />
        </React.StrictMode>
      )
    } else {
      console.error('Container element not found!')
    }

    return () => {
      // Clean up if needed
    }
  }, [])

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState()
      console.log(state.counter.count)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return null
}

export default App
