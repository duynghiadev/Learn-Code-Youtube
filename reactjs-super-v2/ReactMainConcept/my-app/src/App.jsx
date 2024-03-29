import { useState } from 'react'
import './App.css'
import BareButton from './BareButton'
import BareInput from './BareInput'
import Clock from './Clock'
import Layout from './Layout'

function App() {
  const [name, setName] = useState('Casio')
  const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock name={name} />}

      <Layout>
        <h1>Hello</h1>
        <BareInput
          type='text'
          value='100'
          autoFocus
          className='input-control'
          onChange={() => {}}
        />

        <BareButton />
      </Layout>
    </div>
  )
}

export default App
