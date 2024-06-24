import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
