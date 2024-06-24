// App.tsx
import React from 'react'
import { UserListProvider } from './reducers/UserListProvider'
import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <UserListProvider>
      <div>
        <Header title='User List' subtitle='A list of all registered users' />
        <UserList />
        <Footer />
      </div>
    </UserListProvider>
  )
}

export default App
