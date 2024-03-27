import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  const [name, setName] = useState('Casio')

  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Change name</button>
      <Clock name={name} />
    </div>
  )
}

export default App
