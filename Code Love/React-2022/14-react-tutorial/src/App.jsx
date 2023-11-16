import './App.css'
import User from './component/User'

console.log('>>> User:', User(1, 2))

function App() {
  return (
    <div className='App'>
      <User />
    </div>
  )
}

export default App
