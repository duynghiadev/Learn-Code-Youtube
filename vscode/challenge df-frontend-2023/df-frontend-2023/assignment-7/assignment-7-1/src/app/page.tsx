'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import Login from './component/login/Login'
import Register from './component/login/Register'
import { IRootState } from './store/store'

const Home = () => {
  const route = useRouter()

  const [tab, setTab] = useState(0)
  const isAuth = useSelector(
    (state: IRootState) => state.user.userCurrent?.accessToken,
  )

  if (isAuth) {
    route.push('/home')
  }
  return (
    <div className=" bg-bgColor dark:bg-bgColorDark w-full h-screen relative">
      {tab === 0 && <Login setTab={setTab} />}
      {tab === 1 && <Register setTab={setTab} />}
    </div>
  )
}

export default Home
