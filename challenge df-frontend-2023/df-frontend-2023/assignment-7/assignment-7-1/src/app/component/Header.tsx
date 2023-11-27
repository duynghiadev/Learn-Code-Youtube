'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { BiLogOut, BiSolidUser } from 'react-icons/bi'
import { FcKey } from 'react-icons/fc'
import { IRootState } from '../store/store'
import { logout } from '../store/slice/userSlice'
import { changePass } from '../store/slice/modalSlice'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const route = useRouter()
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const name = useSelector((state: IRootState) => state.user.userCurrent)

  const subMenu = (
    <div
      onMouseLeave={() => setOpenSubMenu(false)}
      className="absolute bottom-[-140px] right-0 bg-white dark:bg-bgElm w-[150px]  rounded-md shadow-md z-[3] flex flex-col"
    >
      <button
        className="flex justify-center items-center gap-g10 p-p10px cursor-pointer hover:opacity-80"
        onClick={() => {
          dispatch(changePass())
        }}
      >
        Change Pass <FcKey />
      </button>
      <button
        onClick={() => {
          route.push('/home/infor')
        }}
        className="flex justify-center items-center gap-g10 p-p10px cursor-pointer hover:opacity-80"
      >
        Infor
        <BiSolidUser />
      </button>
      <button
        className="flex justify-center items-center gap-g10 text-primary p-p10px cursor-pointer hover:opacity-80"
        onClick={() => {
          dispatch(logout())
          route.push('/')
        }}
      >
        Logout
        <BiLogOut />
      </button>
    </div>
  )

  return (
    <header className=" bg-white dark:bg-bgElm shadow-md">
      <nav>
        <ul className="nav-list flex items-center justify-between py-[10px] px-[50px]">
          <li className="nav-item-logo text-[18px] font-bold">
            <Link href="/home">
              <h1 className="cursor-pointer">
                <span className=" text-primary text-[28px]">Book</span>
                store
              </h1>
            </Link>
          </li>
          <li className="nav-item-user flex items-center justify-between gap-[20px] relative">
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
              className=" bg-bgColor dark:bg-bgColorDark flex justify-between items-center w-[50px] h-[25px] rounded-full border-[2px] border-solid border-border"
            >
              {theme === 'dark' || !theme ? (
                <Image
                  src="/half-moon.png"
                  width={30}
                  height={30}
                  alt="moon"
                  className="dark-btn ml-auto"
                />
              ) : (
                <Image
                  src="/sun.png"
                  alt="sun"
                  className="light-btn"
                  width={30}
                  height={30}
                />
              )}
            </button>
            <div
              onMouseEnter={() => setOpenSubMenu(true)}
              className="flex justify-between items-center gap-g10"
            >
              <Image src="/user.png" alt="avatar" width={40} height={40} />
              <p className="name">{name?.email ? name.email : 'loading...!'}</p>
            </div>
            {openSubMenu && subMenu}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
