'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { BiLogOut } from 'react-icons/bi'
import { IRootState } from '../store/store'
import { setColor } from '../store/slice/themeSlice'
import { logout } from '../store/slice/userSlice'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const route = useRouter()
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const colorMode = useSelector((state: IRootState) => state.theme.mode)
  const name = useSelector((state: IRootState) => state.user.userCurrent)

  const subMenu = (
    <div
      onMouseLeave={() => setOpenSubMenu(false)}
      className="absolute bottom-[-60px] right-0 bg-[var(--backgroundElm)] w-[150px]  rounded-md shadow-md z-[3]"
    >
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
    <header className="bg-[var(--backgroundElm)] shadow-md">
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
                if (colorMode === 'light') {
                  dispatch(setColor('dark'))
                } else {
                  dispatch(setColor('light'))
                }
              }}
              className=" bg-[var(--bgColor)] flex justify-between items-center w-[50px] h-[25px] rounded-full border-[2px] border-solid border-[var(--border)]"
            >
              {colorMode === 'light' ? (
                <Image
                  src="/sun.png"
                  alt="sun"
                  className="light-btn"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src="/half-moon.png"
                  width={30}
                  height={30}
                  alt="moon"
                  className="dark-btn ml-auto"
                />
              )}
            </button>
            <div
              onMouseEnter={() => setOpenSubMenu(true)}
              className="flex justify-between items-center gap-g10"
            >
              <Image src="/user.png" alt="avatar" width={40} height={40} />
              <p className="name">{name?.email}</p>
            </div>
            {openSubMenu && subMenu}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
