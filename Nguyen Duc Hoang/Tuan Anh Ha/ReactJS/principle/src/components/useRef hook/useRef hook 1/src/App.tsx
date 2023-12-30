import React from 'react'
import Counter from './components/Counter'

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript Counter App</h1>
      <Counter initialCount={0} />
    </div>
  )
}

export default App
