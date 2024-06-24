'use client'
import { redirect, useRouter } from 'next/navigation'

const isAuth = false

export default function ButtonRedirect() {
  if (!isAuth) {
    redirect('/login')
  }

  const router = useRouter()
  const handleNavigate = () => {
    router.push('/login')
    // redirect('/login')
  }

  return <button onClick={handleNavigate}>Chuyển sang trang Login</button>
}
