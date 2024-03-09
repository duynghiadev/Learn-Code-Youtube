'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('duynghiadev@gmail.com')
  console.log('LoginPage')

  return (
    <div>
      Login Page
      {email}
    </div>
  )
}
