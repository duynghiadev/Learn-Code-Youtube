import React, { createContext, useContext, ReactNode } from 'react'

interface UserDetails {
  id: number
  name: string
  email: string
}

interface UserDetailsContextProps {
  userDetails: UserDetails | null
  setUserDetails: (details: UserDetails | null) => void
}

const UserDetailsContext = createContext<UserDetailsContextProps | undefined>(undefined)

export const UserDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = React.useState<UserDetails | null>(null)

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export const useUserDetailsContext = () => {
  const context = useContext(UserDetailsContext)
  if (!context) {
    throw new Error('useUserDetailsContext must be used within a UserDetailsProvider')
  }
  return context
}
