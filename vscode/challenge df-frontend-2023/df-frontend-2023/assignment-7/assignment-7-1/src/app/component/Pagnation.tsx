import React, { useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IRootState } from '../store/store'
import { setCurrentPage } from '../store/slice/booksSlice'

const Pagination = ({ totalPage }: { totalPage: number }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const curentPage = useSelector((state: IRootState) => state.books.currentPage)

  const createQueryString = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(term, value)
    params.set('page', curentPage.toString())
    return params.toString()
  }
  const books = useSelector((state: IRootState) => state.books)
  const a: number[] = []

  for (let i: number = 1; i <= totalPage; i++) {
    a.push(i)
  }
  useEffect(() => {
    const term = searchParams.get('term')
    router.push(`${pathName}?${createQueryString('term', term || '')}`)
  }, [books.currentPage])
  const changePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div className="flex justify-end items-center gap-g10 self-end justify-self-end">
      <button
        aria-label="Previous Page"
        className=" hover:bg-primary hover:text-white p-p10px rounded-md flex flex-end items-center shadow-md"
        onClick={() => {
          if (books.currentPage > 1) {
            changePage(books.currentPage - 1)
          }
        }}
      >
        <AiOutlineLeft />
      </button>

      {a.map((i: number) => (
        <button
          className={`hover:bg-primary hover:text-white p-p4px rounded-md py-p5px px-p10px shadow-md text-[17px] ${
            books.currentPage === i ? 'bg-primary text-white' : ''
          }`}
          key={i}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      ))}

      <button
        aria-label="Next Page"
        className="hover:bg-primary hover:text-white p-p10px rounded-md shadow-md flex flex-end items-center"
        onClick={() => {
          if (books.currentPage < totalPage) {
            changePage(books.currentPage + 1)
          }
        }}
      >
        <AiOutlineRight />
      </button>
    </div>
  )
}

export default Pagination
