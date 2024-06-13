/**
 * - Dưới đây là một ví dụ về một project nhỏ trong React, bao gồm 4 thành phần và sử dụng nhiều hooks khác nhau, bao gồm useState, useEffect, và useContext. Trong ví dụ này, chúng ta sẽ tạo một ứng dụng quản lý danh sách công việc.
 *
 * - Component gốc của ứng dụng, cung cấp Context và chứa các thành phần con.
 */
// App.js
import React, { useState } from 'react'
import UserContext from './components/UserContext'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css' // Import CSS file for global styles

const App = () => {
  const [user, setUser] = useState('John Doe')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='app-container'>
        <h1 className='app-title'>Task Manager</h1>
        <TaskList />
        <AddTask />
      </div>
    </UserContext.Provider>
  )
}

export default App
