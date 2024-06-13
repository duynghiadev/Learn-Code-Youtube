import { useContext } from 'react'
import Profile from './Profile'
import { UserContext } from './UserContext'

export default function UserProfile() {
  const { increaseAge } = useContext(UserContext)

  return (
    <div>
      <Profile />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}
