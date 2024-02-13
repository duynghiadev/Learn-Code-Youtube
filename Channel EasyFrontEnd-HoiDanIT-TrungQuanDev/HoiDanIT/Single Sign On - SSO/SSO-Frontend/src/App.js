import About from './components/About/About'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/about'
          element={<About />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
