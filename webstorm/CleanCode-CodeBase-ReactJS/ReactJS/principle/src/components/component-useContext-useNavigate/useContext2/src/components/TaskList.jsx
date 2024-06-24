/**
 * - TaskList.js: Component hiển thị danh sách công việc của mỗi người dùng và cung cấp Context cho AddTask.
 *
 * - Trong đoạn mã trên:
 *
 * - Tôi đã thêm state userData để lưu trữ dữ liệu người dùng từ API.
 * - useEffect được sử dụng để gọi hàm fetchUserData khi TaskList được mount. Hàm này sử dụng fetch để gửi yêu cầu API và cập nhật userData bằng dữ liệu nhận được.
 * - Tôi sử dụng state isUserDataVisible để quản lý trạng thái hiển thị/ẩn thông tin người dùng.
 *
 * - Class và CSS được thêm vào để làm cho giao diện trở nên responsive và thân thiện với người dùng.
 */
// TaskList.js
import { useContext, useEffect, useState } from 'react'
import AddTask from './AddTask'
import './TaskList.css'
import UserContext from './UserContext'

const TaskList = () => {
  const users = useContext(UserContext)
  console.log('users from components TaskList:', users)

  const [userData, setUserData] = useState(null)
  const [isUserDataVisible, setIsUserDataVisible] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  const handleToggleUserData = () => {
    console.log('isUserDataVisible:', isUserDataVisible)
    setIsUserDataVisible((prev) => !prev)
  }

  return (
    <div className='task-list-container'>
      <h2 className='task-list-title'>{users}'s Task List</h2>
      <AddTask />

      <div className='user-data-container'>
        <button className='toggle-button' onClick={handleToggleUserData}>
          {isUserDataVisible ? 'Hide User Data' : 'Show User Data'}
        </button>
        {userData && (
          <div className={`user-data-content ${isUserDataVisible ? 'visible' : 'hidden'}`}>
            <h3 className='user-data'>User Data:</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskList
