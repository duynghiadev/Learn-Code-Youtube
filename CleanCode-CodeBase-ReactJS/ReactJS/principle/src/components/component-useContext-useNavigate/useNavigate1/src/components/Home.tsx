import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface User {
  id: number
  name: string
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showUsers, setShowUsers] = useState(true) // Thêm state cho việc ẩn/hiện danh sách

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const toggleUsers = () => {
    setShowUsers(!showUsers) // Đảo ngược trạng thái ẩn/hiện danh sách
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toggleUsers}>{showUsers ? 'Hide Users' : 'Show Users'}</button>

      {loading ? (
        <p>Loading...</p>
      ) : showUsers ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Users not found</p>
      )}
    </div>
  )
}

export default Home
