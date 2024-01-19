import React, { useState } from 'react'
import './UserList.scss'

interface UserListProps {
  users: { id: number; name: string }[]
  deleteUser: (userId: number) => void
  editUser: (userId: number, newName: string) => void
}

const UserList: React.FC<UserListProps> = ({ users, deleteUser, editUser }) => {
  const [editedName, setEditedName] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (userId: number, currentName: string) => {
    setEditedName(currentName)
    setIsEditing(true)
  }

  const handleSaveEdit = (userId: number) => {
    if (editedName !== null && editedName.trim() !== '') {
      editUser(userId, editedName)
      setEditedName(null)
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditedName(null)
    setIsEditing(false)
  }

  return (
    <ul className='user-list'>
      {users.map((user) => (
        <li key={user.id}>
          {isEditing && editedName !== null ? (
            <>
              <input
                type='text'
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(user.id)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              {user.name}
              <button onClick={() => handleEdit(user.id, user.name)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default UserList
