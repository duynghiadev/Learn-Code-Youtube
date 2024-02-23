import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/slices/counterSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    fetchAllUser()
  }, [])

  const fetchAllUser = async () => {
    const res = await axios('http://localhost:8080/users/all')
    setListUsers(res.data ? res.data : [])
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
