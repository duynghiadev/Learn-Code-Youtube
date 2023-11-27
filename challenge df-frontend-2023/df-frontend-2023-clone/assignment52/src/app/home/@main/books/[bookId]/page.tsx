'use client'

import { setNameBookDelete } from '@/app/store/slice/booksSlice'
import { setDel } from '@/app/store/slice/modalSlice'
import { IRootState } from '@/app/store/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AiOutlineLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

function Page({ params }: { params: { bookId: string } }) {
  const router = useRouter()
  const filteredBooks = useSelector(
    (state: IRootState) => state.books.filteredBooks,
  )
  const dispatch = useDispatch()

  // Lấy id sách từ URL
  const id = params.bookId[0]
  // Kiểm tra xem bookId có tồn tại trong danh sách sách hay không
  const book = filteredBooks
    ? filteredBooks.find((book) => book.id === id)
    : ({} as IBook)
  if (!book) {
    return router.push('/home')
  }

  function onDelete() {
    if (book) {
      dispatch(setDel(true))
      dispatch(setNameBookDelete(book.name))
    }
  }

  return (
    <div className=" p-p50px mt-m50 leading-[1.5] w-[93%] mx-auto bg-[var(--backgroundElm)] rounded-md shadow-md">
      <Link
        href="/home"
        className=" text-primary font-bold flex  items-center mb-m30"
      >
        <AiOutlineLeft className="font-bold" /> <span className="">Back</span>
      </Link>
      <h1 className="text-[18px] mb-m20">
        <b>Name: {book.name}</b>
      </h1>
      <p className="text-[18px]">
        <b>Author:</b> {book.author}
      </p>
      <p className="text-[18px] mb-m30">
        <b>Topic:</b> {book.topic}
      </p>
      <button onClick={onDelete} className=" text-primary font-bold underline ">
        Delete
      </button>
    </div>
  )
}

export default Page
