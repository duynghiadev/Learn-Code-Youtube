// hooks/useUsers.tsx
import { useQuery } from 'react-query'

export type User = {
  id: number
  name: string
  // Add other properties as needed
}

export const useUsers = () => {
  const defineUser = 'users'

  const functionUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log('data:', data) // Log the data to the console
    return data
  }

  const { data: users } = useQuery(defineUser, functionUser)

  return { users }
}
