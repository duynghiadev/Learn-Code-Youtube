import React from 'react'
import Link from 'next/link'
import { AiOutlineLeft } from 'react-icons/ai'

function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col mt-[130px]">
      <h1 className=" font-bold text-center mb-m30">
        <p className=" text-[72px]">404</p>
        Page not Found
      </h1>

      <Link className="text-primary font-bold flex items-center" href="/">
        <AiOutlineLeft className="font-bold" />
        Back to Home page
      </Link>
    </div>
  )
}

export default NotFound
