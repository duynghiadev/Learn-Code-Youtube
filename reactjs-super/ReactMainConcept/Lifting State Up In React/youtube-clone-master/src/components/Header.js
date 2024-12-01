import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import logo from '../assets/images/logo.png'

import { toggleMenu } from '../utils/appSlice'

const Header = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col px-5 py-2.5 shadow h-14'>
      <div className='flex col-span-1'>
        <AiOutlineMenu className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()} />
        <a href='/'>
          {' '}
          <img className='h-8 mx-2' alt='youtube-logo' src={logo} />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <input
          className='w-1/2 h-[36px] border border-gray-200 py-2 px-5  rounded-l-full'
          placeholder=' Search'
          type='text'
        />
        <button className='border border-gray-200 py-2 px-5 h-[36px] rounded-r-full bg-gray-100'>
          <AiOutlineSearch className='' />
        </button>
      </div>
      <div className='col-span-1'>
        <FaUserCircle />
      </div>
    </div>
  )
}

export default Header
