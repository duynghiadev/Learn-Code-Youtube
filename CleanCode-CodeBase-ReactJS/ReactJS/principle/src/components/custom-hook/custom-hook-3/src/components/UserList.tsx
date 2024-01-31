// components/UserList.tsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../store/userListSlice'
import styled from 'styled-components'

const StyledUserList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    input {
      padding: 4px;
      margin-right: 10px;
    }

    button {
      padding: 4px 8px;
      margin-right: 5px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

interface UserListProps {
  users: { id: number; name: string }[]
  onDeleteUser: (userId: number) => void
  onEditUser: (userId: number, newName: string) => void
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser, onEditUser }) => {
  const [editedNames, setEditedNames] = useState<Record<number, string>>({})
  const dispatch = useDispatch()

  const handleEdit = (userId: number, currentName: string) => {
    setEditedNames((prev) => ({ ...prev, [userId]: currentName }))
  }

  const handleSaveEdit = (userId: number) => {
    const editedName = editedNames[userId]
    if (editedName !== undefined && editedName.trim() !== '') {
      dispatch(editUser({ userId, newName: editedName }))
      setEditedNames((prev) => ({ ...prev, [userId]: undefined } as Record<number, string>))
    }
  }

  const handleCancelEdit = (userId: number) => {
    setEditedNames((prev) => ({ ...prev, [userId]: undefined } as Record<number, string>))
  }

  return (
    <StyledUserList>
      {users.map((user) => (
        <li key={user.id}>
          {editedNames[user.id] !== undefined ? (
            <>
              <input
                type='text'
                value={editedNames[user.id]}
                onChange={(e) => setEditedNames((prev) => ({ ...prev, [user.id]: e.target.value }))}
              />
              <button onClick={() => handleSaveEdit(user.id)}>Save</button>
              <button onClick={() => handleCancelEdit(user.id)}>Cancel</button>
            </>
          ) : (
            <>
              {user.name}
              <button onClick={() => handleEdit(user.id, user.name)}>Edit</button>
              <button onClick={() => onDeleteUser(user.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </StyledUserList>
  )
}

export default UserList
