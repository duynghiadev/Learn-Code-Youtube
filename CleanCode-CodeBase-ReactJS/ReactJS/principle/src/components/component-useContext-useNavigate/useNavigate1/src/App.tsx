/**
 * Dưới đây là một ví dụ về cách bạn có thể sử dụng các hook như useParams, useNavigate, và useEffect để gọi API và xây dựng một ứng dụng React đơn giản. Trong ví dụ này, chúng ta sẽ tạo một ứng dụng hiển thị thông tin về người dùng từ một API công cộng.
 */
/**
 * Trong ví dụ này, useParams được sử dụng để lấy ID từ URL và useNavigate để thực hiện chuyển hướng. useEffect được sử dụng để gọi API khi component được render và khi tham số thay đổi.
 */
// Trong App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { UserDetailsProvider } from './context/UserDetailsContext'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <Router>
      <UserProvider>
        <UserDetailsProvider>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/users/:id' element={<UserDetails />} />
            </Routes>
          </div>
        </UserDetailsProvider>
      </UserProvider>
    </Router>
  )
}

export default App
