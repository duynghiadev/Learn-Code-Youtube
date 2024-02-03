import Form from './components/Form'
import Header from './components/Header'
import Login from './components/Login'
import PostList from './components/PostList'
import Register from './components/Register'

function App() {
  return (
    <div className='container'>
      <Header />
      <Form />
      <PostList />
      <Login />
      <Register />
    </div>
  )
}

export default App
