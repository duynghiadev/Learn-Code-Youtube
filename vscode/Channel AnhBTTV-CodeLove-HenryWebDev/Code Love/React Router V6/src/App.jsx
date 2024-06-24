import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import News from './components/News'
import Link from './components/routes/Link'
import Route from './components/routes/Route'
import Routes from './components/routes/Routes'

function App() {
  // khi click component Link -> thì component App sẽ re-render lại
  const [flagChangePath, setFlagChangePath] = useState(true)

  const handlePathChange = () => {
    setFlagChangePath(!flagChangePath)
  }

  return (
    <div>
      <div>
        <nav>
          <ul className='menu container'>
            <li>
              <Link to='/home' onHandleChangePath={handlePathChange}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/news' onHandleChangePath={handlePathChange}>
                News
              </Link>
            </li>
            <li>
              <Link to='/contact' onHandleChangePath={handlePathChange}>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/about' onHandleChangePath={handlePathChange}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
