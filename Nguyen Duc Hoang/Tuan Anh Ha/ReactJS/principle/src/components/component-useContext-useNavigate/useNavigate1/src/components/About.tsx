import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import User from '../interface/UserTypes'

interface Props {
  userId?: number // Đặt userId là prop để truyền vào từ component cha, ví dụ UserDetails
}

const About = ({ userId }: Props) => {
  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        const data = await response.json()
        setUserData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user details:', error)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [userId])

  return (
    <div>
      <h1>About Us</h1>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default About
