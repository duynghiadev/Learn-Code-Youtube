import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/slices/counterSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchAllUsers } from './redux/slices/userSlice'

const App = () => {
  const dispatch = useDispatch()

  const listUsers = useSelector((state) => state.user.listUsers)
  const isLoading = useSelector((state) => state.user.isLoading)
  const isError = useSelector((state) => state.user.isError)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  if (isError === true && isLoading === false) {
    return <div>Something wrongs. Please try again!</div>
  }

  if (isError === false && isLoading === true) {
    return <div>Loading data...</div>
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <h3>hello Redux ToolKit</h3>
        <div className='btn-actions'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div>Count: {count}</div> */}
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr key={`table-redux-${index}`}>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  )
}

export default App
