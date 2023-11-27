'use client'

import Link from 'next/link'
import { AiOutlineLeft } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { IBook } from '../../../interface/book.model'
import MainHeader from '../../../layouts/MainHeader'
import DeleteBook from '../../../components/DeleteBook'
import Toast from '../../../components/Toast'
import EmptyData from '../../../components/EmptyData'
import { useBookContext } from '../../../contexts/bookContext'
import AuthRequire from '../../AuthRequire'

interface BookDetailProps {
  id: string
}

function Page({ params: { id } }: { params: BookDetailProps }) {
  const { books, showToast, deleteBook } = useBookContext()
  const [bookDetail, setBookDetail] = useState<IBook | null>(null)
  const [deleteModal, setDeleteModal] = useState(false)
  const [bookToDelete, setBookToDelete] = useState<IBook | null>(null)

  const fetchBookDetail = (id: string) => {
    try {
      const book = books.filter(
        (book: IBook) => book.id === parseInt(id, 10),
      )[0]

      if (book) {
        setBookDetail(book)
      } else {
        setBookDetail(null)
      }
    } catch (error) {
      console.error('Error getting book:', error)
    }
  }

  useEffect(() => {
    fetchBookDetail(id)
    // eslint-disable-next-line
  }, [id])

  const handleDeleteBook = (book: IBook) => {
    setBookToDelete(book)
    setDeleteModal(true)
  }

  const confirmDelete = () => {
    if (bookDetail) {
      deleteBook(bookDetail)
      setBookDetail(null)
      setDeleteModal(false)
    }
  }

  return (
    <AuthRequire>
      <div className="min-h-screen px-p50 mt-m30 leading-[1.5] dark:bg-slate-800">
        <MainHeader />
        {bookDetail ? (
          <div className="px-5 pt-5 dark:bg-slate-800">
            <Link
              href="/books"
              className="text-primary font-bold flex items-center mb-m30 text-red-500"
            >
              <AiOutlineLeft className="font-bold" />{' '}
              <span className="">Back</span>
            </Link>
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-800 dark:text-white font-bold text-2xl py-5">
                {bookDetail?.name}
              </h2>
              <p>
                <span className="text-gray-800 dark:text-white text-base font-semibold">
                  Author:&nbsp;
                </span>
                <span className="dark:text-white">{bookDetail?.author}</span>
              </p>
              <p>
                <span className="text-gray-800 dark:text-white text-base font-semibold">
                  Topic:&nbsp;
                </span>
                <span className="dark:text-white">{bookDetail?.topic}</span>
              </p>
            </div>
            <button
              onClick={() => {
                handleDeleteBook(bookDetail)
              }}
              className="text-left text-red-500 font-semibold underline cursor-pointer mt-5 mr-2"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center dark:bg-slate-800">
            <EmptyData />
            <Link href="/books">
              <button className="bg-green-300  text-center w-32 h-10 rounded mt-4 ">
                Go to Home
              </button>
            </Link>
          </div>
        )}
        {showToast && <Toast />}
        {deleteModal && (
          <DeleteBook
            closeDeleteBook={() => setDeleteModal(false)}
            bookToDelete={bookToDelete}
            confirmDelete={confirmDelete}
          />
        )}
      </div>
    </AuthRequire>
  )
}

export default Page
