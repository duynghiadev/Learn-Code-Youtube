import './App.css'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import About from './components/About'
import Route from './components/routes/Route'

function App() {
  return (
    <div>
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
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </div>
      </div>
    </div>
  )
}

export default App
