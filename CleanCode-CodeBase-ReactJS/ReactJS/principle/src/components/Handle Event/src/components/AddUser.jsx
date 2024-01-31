/**
 * Ở đây, bạn có thể thấy:
 *
 * - name và email là các state để theo dõi giá trị của các input trong form.
 * - setName và setEmail là các hàm để cập nhật giá trị của name và email.
 * - Khi người dùng thay đổi giá trị trong các input, sự kiện onChange được kích hoạt để cập nhật giá trị của state tương ứng.
 * - Khi người dùng nhấn vào nút "Add User", hàm handleAddUser được gọi để thực hiện yêu cầu POST đến API và thêm người dùng mới. Sau đó, trang web sẽ chuyển hướng về danh sách người dùng.
 */
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './AddUser.css'

const AddUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleAddUser = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email
      })
      console.log('User added:', response.data)
      navigate('/')
    } catch (error) {
      console.error('Error adding user:', error)
    }
  }

  return (
    <div>
      <h1>Add User</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default AddUser
