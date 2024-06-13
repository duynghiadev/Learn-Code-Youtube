import { useUser } from '../hooks/useUser'

export default function Cart() {
  const { user } = useUser({})

  return (
    <div>
      <p>Cart</p>
      {user?.name} {''}
      {user?.address} {''}
      {user?.age}
    </div>
  )
}
