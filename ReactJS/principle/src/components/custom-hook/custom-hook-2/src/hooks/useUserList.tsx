/**
 * Trong ví dụ này, useUserList là custom hook quản lý danh sách người dùng, và nó được sử dụng trong ứng dụng gồm 5 components: App, AddUserForm, UserList.
 */

import { useState } from 'react'

interface User {
  id: number
  name: string
}

const useUserList = () => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (name: string) => {
    const newUser: User = {
      id: Date.now(),
      name
    }
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  const editUser = (userId: number, newName: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, name: newName } : user))
    )
  }
  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }

  return { users, addUser, editUser, deleteUser }
}

export default useUserList
