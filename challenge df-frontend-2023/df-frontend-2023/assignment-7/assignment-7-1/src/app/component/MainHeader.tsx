'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import ButtonPrimary from '../ui/ButtonPrimary'
import InputElm from '../ui/InputElm'
import { setCreate } from '../store/slice/modalSlice'
import { IRootState } from '../store/store'
import { setQuery } from '../store/slice/booksSlice'

const MainHeader = () => {
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

  const searchBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value))
    router.push(
      `${pathName}?${createQueryString('term', e.target.value || '')}`,
    )
  }

  return (
    <header className="flex justify-between items-center mb-m30">
      <InputElm name="Search books" type="text" setData={searchBooks} />

      <ButtonPrimary
        text="Add book"
        onClick={() => dispatch(setCreate(true))}
        type="button"
        width={100}
      />
    </header>
  )
}

export default MainHeader
