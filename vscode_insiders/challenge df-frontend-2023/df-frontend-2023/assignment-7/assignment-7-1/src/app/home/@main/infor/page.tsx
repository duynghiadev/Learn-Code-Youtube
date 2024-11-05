'use client'

import { setUpdate } from '@/app/store/slice/modalSlice'
import { Me, MeResponse } from '@/generated/model'
import { getMe } from '@/generated/user/user'
import { notification } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

function Page() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Me>()
  useEffect(() => {
    setLoading(true)
    getMe()
      .then((res: MeResponse) => {
        if (res.data) {
          setData(res.data)
        }
        setLoading(false)
      })
      .catch((error: ErrorResponse) => {
        notification.error({
          message: error.error,
          description: error.message,
        })
        setLoading(false)
      })
  }, [])
  return (
    <div className=" p-p50px mt-m50 leading-[1.5] w-[93%] mx-auto bg-white dark:bg-bgElm rounded-md shadow-md">
      <div className=" flex justify-between items-center mb-m30">
        <Link
          href="/home"
          className=" text-primary font-bold flex  items-center"
        >
          <AiOutlineLeft className="font-bold" /> <span className="">Back</span>
        </Link>
        <button
          onClick={() => {
            if (data) {
              dispatch(setUpdate(data))
            }
          }}
          className=" text-primary font-bold flex  items-center"
        >
          <BiEdit /> Update
        </button>
      </div>

      <Image
        src={data?.avatar ? data.avatar : '/user.png'}
        width={100}
        height={100}
        alt="avartar"
        className=" rounded-full mb-m30"
      />
      <div>
        <h1 className="text-[18px] mb-m20">
          Full Name: <b>{loading ? 'loading...!' : data?.fullName}</b>
        </h1>
        <p className="text-[18px]">
          Email: <b>{loading ? 'loading...!' : data?.email}</b>
        </p>
      </div>
    </div>
  )
}

export default Page
