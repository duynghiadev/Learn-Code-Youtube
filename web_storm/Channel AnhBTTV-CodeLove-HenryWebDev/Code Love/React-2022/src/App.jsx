import './App.css'
import * as constantAll from './constant/constant'
import { city, country } from './constant/constant'

console.log(constantAll) // module
console.log(constantAll.job)
console.log(constantAll.name)

console.log(city)
console.log(country)

function App() {
  return <div className='App'>Hello World</div>
}

export default App

// Có 2 cách export:
// export name: cách này thì này thì export nhiều thứ trong 1 file
// export default: cách này thì chỉ export function thôi
