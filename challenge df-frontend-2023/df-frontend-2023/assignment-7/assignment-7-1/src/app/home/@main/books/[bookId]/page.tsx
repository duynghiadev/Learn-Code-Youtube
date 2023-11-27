'use client'

import NotFound from '@/app/not-found'
import { setNameBookDelete } from '@/app/store/slice/booksSlice'
import { setDel } from '@/app/store/slice/modalSlice'
import { getBook } from '@/generated/book/book'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Book, BookResponse } from '@/generated/model'
import { notification } from 'antd'

function Page({ params }: { params: { bookId: string } }) {
  const dispatch = useDispatch()
  const [data, setData] = useState<Book>()

  useEffect(() => {
    getBook(parseInt(params.bookId, 10))
      .then((res: BookResponse) => {
        if (res.data) {
          setData(res.data)
        }
      })
      .catch((error: ErrorResponse) => {
        notification.error({
          message: error.error,
          description: error.message,
        })
      })
  }, [])

  if (!data) {
    return NotFound
  }

  function onDelete() {
    if (data) {
      dispatch(setDel(true))
      dispatch(setNameBookDelete(data))
    }
  }

  return (
    <div className=" p-p50px mt-m50 leading-[1.5] w-[93%] mx-auto bg-white dark:bg-bgElm rounded-md shadow-md">
      <Link
        href="/home"
        className=" text-primary font-bold flex  items-center mb-m30"
      >
        <AiOutlineLeft className="font-bold" /> <span className="">Back</span>
      </Link>
      <h1 className="text-[18px] mb-m20">
        <b>Name: {data.name}</b>
      </h1>
      <p className="text-[18px]">
        <b>Author:</b> {data.author}
      </p>
      <p className="text-[18px] mb-m30">
        <b>Topic:</b> {data.topic?.name ? data.topic.name : 'lodaing...!'}
      </p>
      <button onClick={onDelete} className=" text-primary font-bold underline ">
        Delete
      </button>
    </div>
  )
}

export default Page
