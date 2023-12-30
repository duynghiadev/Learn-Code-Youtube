// App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
import './App.scss' // Import your SCSS file

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='app-container'>
          {/* Apply a class to the container div */}
          <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/users/:userId' element={<UserDetail />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
