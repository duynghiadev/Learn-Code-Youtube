import React, { useState } from 'react'
import './AddUserForm.scss'

interface AddUserFormProps {
  addUser: (name: string) => void
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [userName, setUserName] = useState('')

  const handleAddUser = () => {
    if (userName.trim() !== '') {
      addUser(userName)
      setUserName('')
    }
  }

  return (
    <div className='add-user-form'>
      <input
        type='text'
        placeholder='Enter name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default AddUserForm
