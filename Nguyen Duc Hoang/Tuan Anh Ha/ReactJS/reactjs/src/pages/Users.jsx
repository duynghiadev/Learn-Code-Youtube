import { useState, useEffect } from 'react'

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
    </div>
  )
}

export default Users
