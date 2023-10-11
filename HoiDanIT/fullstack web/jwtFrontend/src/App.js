import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import { Rings } from 'react-loader-spinner'
import { UserContext } from './context/UserContext'
import NavHeader from './components/Navigation/Nav'

function App() {
  const { user } = useContext(UserContext)

  return (
    <>
      <Router>
        {user && user.isLoading ? (
          <div className='loading-container'>
            <Rings height='100' width='100' color='#1877f2' ariaLabel='loading' />
            <div>Loading data...</div>
          </div>
        ) : (
          <>
            <div className='app-header'>
              <NavHeader />
            </div>
            <div className='app-container'>
              <AppRoutes />
            </div>
          </>
        )}

        <ToastContainer
          position='bottom-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </Router>
    </>
  )
}

export default App
