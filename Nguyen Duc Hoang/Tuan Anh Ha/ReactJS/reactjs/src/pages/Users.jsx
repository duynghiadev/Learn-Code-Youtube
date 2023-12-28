import { useState, useEffect } from 'react'
import User from '../components/Customer/User'

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const responseJSON = await response.json()
      setUsers(responseJSON)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h3>Users of the App</h3>
      <button
        onClick={() => {
          console.log(users)
        }}
      >
        Print users now
      </button>
      {users && users.map((user) => <User key={user.id} {...user} />)}
    </div>
  )
}

export default Users
