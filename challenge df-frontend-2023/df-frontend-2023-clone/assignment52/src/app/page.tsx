'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Login from './component/login/Login'
import Register from './component/login/Register'

import { setColor } from './store/slice/themeSlice'
import { saveToLocalStorage } from './function/localStorage'
import { setBooks } from './store/slice/booksSlice'
import { login } from './store/slice/userSlice'

const Home = () => {
  const route = useRouter()
  const dispatch = useDispatch()
  const [tab, setTab] = useState(0)
  const isAuth =
    typeof window !== 'undefined' ? localStorage.getItem('userCurrent') : null

  useEffect(() => {
    const check = {
      colorMode:
        typeof window !== 'undefined'
          ? localStorage.getItem('color-mode')
          : null,
      books:
        typeof window !== 'undefined' ? localStorage.getItem('books') : null,
    }
    if (check.colorMode) {
      dispatch(setColor(JSON.parse(check.colorMode)))
    } else {
      saveToLocalStorage('color-mode', 'light')
    }
    if (check.books) {
      dispatch(setBooks(JSON.parse(check.books)))
    } else {
      saveToLocalStorage('books', [])
    }
  }, [])

  if (isAuth) {
    dispatch(login(JSON.parse(isAuth)))
    route.push('/home')
  }
  return (
    <>
      {tab === 0 && <Login setTab={setTab} />}
      {tab === 1 && <Register setTab={setTab} />}
    </>
  )
}

export default Home
