'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Avatar from '../assets/avatar.png'
import ToggleTheme from '../components/ToggleTheme'
import useAuth from '../hooks/useAuth'

const MainHeader = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data, logout } = useAuth()

  const Router = useRouter()
  const [accountMenu, setAccountMenu] = useState(false)

  const toggleDropdown = () => {
    setAccountMenu(!accountMenu)
  }

  const handleLogout = async () => {
    try {
      await logout()
      Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="px-3 py-2 custom-shadow z-[10] bg-white dark:bg-slate-800">
      <div className="flex items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white dark:text-white">
            Bookstore
          </p>
        </Link>
        <div className="flex align-middle float-right gap-2">
          <ToggleTheme />
          <div className="relative inline-block text-left ">
            <button
              onClick={toggleDropdown}
              className="flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:text-white"
            >
              <Image
                src={Avatar}
                alt="Avatar"
                width={40}
                height={40}
                className="inline-block rounded-full ring-2 ring-white mr-3"
                priority
              />
              {data?.email}
            </button>
            {accountMenu && (
              <button
                onClick={handleLogout}
                className="absolute z-10 p-2 m-10 w-full h-full text-left items-center origin-bottom-right rounded-md custom-shadow bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
