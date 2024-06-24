// components/AddUserForm.tsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userListSlice'
import styled from 'styled-components'

const StyledAddUserForm = styled.div`
  margin-bottom: 20px;

  input {
    padding: 8px;
    margin-right: 10px;
  }

  button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`

interface AddUserFormProps {
  onAddUser: (name: string) => void
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAddUser }) => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const handleAddUser = () => {
    if (userName.trim() !== '') {
      dispatch(addUser(userName))
      setUserName('')
    }
  }

  return (
    <StyledAddUserForm>
      <input
        type='text'
        placeholder='Enter name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </StyledAddUserForm>
  )
}

export default AddUserForm
