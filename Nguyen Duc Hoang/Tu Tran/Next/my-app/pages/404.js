import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [])

  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>That page cannot be found 🙈</h2>
      <p>
        Going back to the
        <Link legacyBehavior href='/'>
          <a> Home Page </a>
        </Link>
        is 10 seconds...🕑
      </p>
    </div>
  )
}
