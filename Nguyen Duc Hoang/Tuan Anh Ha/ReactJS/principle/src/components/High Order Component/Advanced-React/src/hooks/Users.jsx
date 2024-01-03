import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setUsers(res.data.slice(0, 10)))
      .catch((err) => console.log(err))
  })
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
