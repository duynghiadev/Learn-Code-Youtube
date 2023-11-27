import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'
import LoadingSkeleton from '../components/LoadingSkeleton'

function AuthRequire({ children }: { children: React.ReactNode }) {
  const Router = useRouter()
  const { isAuthenticated, isInitialized } = useAuth()

  useEffect(() => {
    if (!isInitialized) {
      return
    }
    if (!isAuthenticated) {
      Router.push('/')
    }
  }, [isAuthenticated, isInitialized, Router])

  if (!isInitialized) {
    return <LoadingSkeleton />
  }

  return <div>{children}</div>
}

export default AuthRequire
