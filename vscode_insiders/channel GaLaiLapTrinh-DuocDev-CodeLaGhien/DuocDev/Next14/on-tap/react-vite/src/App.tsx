import './App.css'
import { websites } from './data'

function App() {
  return (
    <div>
      <h1>Các website phổ biến</h1>
      <ul>
        {websites.map((item) => {
          return (
            <li key={item.url}>
              <a href={item.url} target='_blank' rel='noreferrer'>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
