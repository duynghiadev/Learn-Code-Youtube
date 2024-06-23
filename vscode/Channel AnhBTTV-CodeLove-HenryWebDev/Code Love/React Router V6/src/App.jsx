import './App.css'

function App() {
  return (
    <div>
      <nav>
        <ul className='menu container'>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/news'>News</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <h3>Home page</h3>
      </div>
    </div>
  )
}

export default App
