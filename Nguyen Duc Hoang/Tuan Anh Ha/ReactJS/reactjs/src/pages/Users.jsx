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

  const deleteUser = (id) => {
    console.log('id user delete from parent:', id)
    setUsers(users.filter((user) => user.id !== id))
    console.log('user deleted:', id)
  }

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
      {users && users.map((user) => <User key={user.id} {...user} handleDelete={deleteUser} />)}
    </div>
  )
}

export default Users
