import { useUser } from '../hooks/useUser'

export default function Navigation() {
  const { user } = useUser({})

  return (
    <div>
      <p>Navigation</p>
      {user?.name}
    </div>
  )
}
