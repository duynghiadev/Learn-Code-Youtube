import './App.css'
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Welcome name='Ronaldo' age={10} />
      <Welcome name='Messi' age={32} />
      <Welcome name='Mbape' age={20} />
    </div>
  )
}

export default App
