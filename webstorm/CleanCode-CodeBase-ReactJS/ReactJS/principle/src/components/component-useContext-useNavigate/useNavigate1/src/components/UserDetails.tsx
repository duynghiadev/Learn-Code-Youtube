/**
 * Trong mã trên, loading được sử dụng để theo dõi trạng thái của quá trình gọi API. Khi đang gọi API, hiển thị thông báo "Loading...", sau đó, nếu API trả về dữ liệu, hiển thị thông tin người dùng, và nếu có lỗi, hiển thị thông báo "User not found".
 */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface UserDetailsProps {
  id?: string
}

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ id }) => {
  const { id: routeId } = useParams()
  const userId = id || routeId
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(!!userId) // Set loading true only if userId exists

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!userId) {
          setLoading(false)
          return
        }

        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!response.ok) {
          throw new Error('User not found')
        }

        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error('Error fetching user details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDetails()
  }, [userId])

  return (
    <div>
      <h1>User Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default UserDetails
