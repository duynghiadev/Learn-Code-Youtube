import './App.css'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import About from './components/About'
import Route from './components/routes/Route'
import Link from './components/routes/Link'

function App() {
  return (
    <div>
      <div>
        <nav>
          <ul className='menu container'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
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
