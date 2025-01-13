'use client'

import { closeModal } from '@/app/store/slice/modalSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const Backdrop = () => {
  const dispatch = useDispatch()
  return (
    <button
      aria-label="back drop"
      id="backdrop"
      className="fixed w-full h-[100vh] bg-black opacity-40 z-[2] top-0"
      onClick={() => dispatch(closeModal())}
    />
  )
}

export default Backdrop
