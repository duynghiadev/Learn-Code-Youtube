/**
 * - Dưới đây là một ví dụ phức tạp hơn về việc truyền Context xuống cấp bậc 2 và bậc 3 trong React. Trong ví dụ này, chúng ta sẽ tạo một ứng dụng quản lý nhiều danh sách công việc cho nhiều người dùng khác nhau. Mỗi người dùng có thể thêm và quản lý các công việc của họ, và có một chức năng tổng hợp các công việc từ tất cả người dùng.
 *
 * - App.js: Component gốc của ứng dụng, cung cấp Context cho người dùng và chứa các danh sách công việc của mỗi người dùng.
 */
/**
 * - Trong ví dụ này, App cung cấp Context cho TaskListsContainer, TaskListsContainer cung cấp Context cho từng TaskList, và TaskList cung cấp Context cho AddTask. Mỗi AddTask biết người dùng đang thêm công việc cho ai thông qua Context.
 */
import React from 'react'
import UserContext from './components/UserContext'
import './App.css' // Import file CSS chứa styles
import TaskList from './components/TaskList'
import { useState } from 'react'

const App = () => {
  const [user1, setUser1] = useState('Cristiano Ronaldo')
  const [user2, setUser2] = useState('Lionel Messi')

  return (
    <div>
      <UserContext.Provider value={user1}>
        <div className='app-container'>
          <h1>Task Manager</h1>
          <TaskList />
        </div>
      </UserContext.Provider>

      <UserContext.Provider value={user2}>
        <div className='app-container'>
          <h1>Task Manager</h1>
          <TaskList />
        </div>
      </UserContext.Provider>
    </div>
  )
}

export default App
