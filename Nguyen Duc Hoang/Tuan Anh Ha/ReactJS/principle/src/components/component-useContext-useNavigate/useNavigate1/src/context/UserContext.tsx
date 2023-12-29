/**
 * Trong ví dụ trên, UserProvider và UserDetailsProvider sử dụng createContext để tạo context và cung cấp các giá trị cho các component con thông qua useUserContext và useUserDetailsContext. UserList và UserDetails sử dụng useUserContext và useUserDetailsContext để truy cập dữ liệu từ context và thực hiện các chức năng liên quan đến quản lý người dùng.
 */
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: number
  name: string
  email: string
}

interface UserContextProps {
  users: User[]
  addUser: (user: User) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
