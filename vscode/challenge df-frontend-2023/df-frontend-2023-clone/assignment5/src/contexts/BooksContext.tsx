'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { IBook } from '@/src/types/book'
import { INITIAL_BOOKS } from '@/src/lib/data'
import { getLocalStorageItem, setLocalStorageItem } from '@/src/lib/utils'
import { BOOKS_DATA_KEY, BOOKS_PER_PAGE } from '@/src/lib/constants'

interface IBooksValues {
  bookStore: IBook[]
  search: string
  pageIndex: number
  pageSize: number
}

interface IBooksContext extends IBooksValues {
  addBook: (book: IBook) => void
  editBook: (book: IBook) => void
  deleteBook: (id: string) => void
  setSearch: (search: string) => void
  setPageIndex: (pageIndex: number) => void
  setPageSize: (page: number) => void
}

const initialState: IBooksValues = {
  bookStore: INITIAL_BOOKS,
  search: '',
  pageIndex: 0,
  pageSize: BOOKS_PER_PAGE,
}

const BooksContext = createContext<IBooksContext>({
  ...initialState,

  addBook: () => {},
  editBook: () => {},
  deleteBook: () => {},
  setSearch: () => {},
  setPageIndex: () => {},
  setPageSize: () => {},
})

export const useBooksContext = () => {
  const context = useContext<IBooksContext>(BooksContext)

  if (!context) {
    throw new Error('useBooksContext must be used within BooksProvider')
  }

  return context
}

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const storedData = getLocalStorageItem(BOOKS_DATA_KEY)
  const [bookStore, setBookStore] = useState<IBook[]>(
    (storedData && storedData.bookStore) ?? INITIAL_BOOKS,
  )
  const [search, setSearch] = useState<string>('')
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [pageSize, setPageSize] = useState<number>(
    (storedData && storedData.pageSize) ?? BOOKS_PER_PAGE,
  )

  useEffect(() => {
    setLocalStorageItem(BOOKS_DATA_KEY, { bookStore, pageSize })
  }, [bookStore, pageSize])

  const addBook = useCallback(
    (book: IBook) => setBookStore((books) => [book, ...books]),
    [setBookStore],
  )

  const editBook = useCallback(
    (book: IBook) =>
      setBookStore((books) =>
        books.map((existingBook) =>
          existingBook.id === book.id ? book : existingBook,
        ),
      ),
    [setBookStore],
  )

  const deleteBook = useCallback(
    (id: string) =>
      setBookStore((books) => books.filter((book) => book.id !== id)),
    [setBookStore],
  )

  const memo = useMemo(
    () => ({
      bookStore,
      search,
      pageIndex,
      pageSize,

      addBook,
      editBook,
      deleteBook,
      setSearch,
      setPageIndex,
      setPageSize,
    }),
    [
      bookStore,
      search,
      pageIndex,
      pageSize,

      addBook,
      editBook,
      deleteBook,
      setSearch,
      setPageIndex,
      setPageSize,
    ],
  )

  return <BooksContext.Provider value={memo}>{children}</BooksContext.Provider>
}
