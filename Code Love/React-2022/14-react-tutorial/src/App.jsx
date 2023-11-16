import './App.css'
import Product from './component/Product'
import User from './component/User'

console.log('>>> User:', User(1, 2))

function App() {
  return (
    <div className='App'>
      {/* <User /> */}
      <Product />
    </div>
  )
}

export default App
