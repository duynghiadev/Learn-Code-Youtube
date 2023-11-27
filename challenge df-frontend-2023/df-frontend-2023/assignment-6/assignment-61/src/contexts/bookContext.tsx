'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import LoadingSkeleton from '../components/LoadingSkeleton'
import { IBook } from '../interface/book.model'
import { BOOKS } from '../constant/book'

interface BookContextProps {
  books: IBook[]
  addBook: (book: IBook) => void
  editBook: (book: IBook) => void
  deleteBook: (book: IBook) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  toastMessage: string
  setToastMessage: (message: string) => void
  showToast: boolean
  setShowToast: (show: boolean) => void
  closeToast: () => void
  searchBooks: (query: string) => void
  filteredBooks: IBook[]
}

const BookContext = createContext<BookContextProps | undefined>(undefined)

export function useBookContext(): BookContextProps {
  const context = useContext(BookContext)
  if (context === undefined) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<IBook[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState<string>('')
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([])

  const openToast = () => {
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 1500)
  }

  const closeToast = () => {
    setShowToast(false)
    setToastMessage('')
  }

  const addBook = useCallback(
    (newBook: IBook) => {
      const newBooks = [...books, newBook]
      setBooks(newBooks)
      openToast()
      const message = `Add book ${newBook.name} successful!`
      setToastMessage(message)

      localStorage.setItem('books', JSON.stringify(newBooks))
    },
    [books],
  )

  const editBook = useCallback(
    (editedBook: IBook) => {
      const updatedBooks = books.map((book) =>
        book.id === editedBook.id ? editedBook : book,
      )
      setBooks(updatedBooks)
      openToast()
      const message = `Edit book ${editedBook.name} successful!`
      setToastMessage(message)

      localStorage.setItem('books', JSON.stringify(updatedBooks))
    },
    [books],
  )

  const deleteBook = useCallback(
    (bookToDelete: IBook) => {
      const updatedBooks = books.filter((book) => book.id !== bookToDelete.id)
      setBooks(updatedBooks)
      openToast()
      const message = `Delete book ${bookToDelete.name} successful!`
      setToastMessage(message)

      localStorage.setItem('books', JSON.stringify(updatedBooks))
    },
    [books],
  )

  const searchBooks = useCallback(
    (query: string) => {
      const formattedQuery = query.trim().toLowerCase()
      const filtered = books.filter((book: IBook) =>
        book.name.toLowerCase().includes(formattedQuery),
      )
      setFilteredBooks(filtered)
    },
    [books],
  )

  useEffect(() => {
    const loadBooksFromLocalStorage = () => {
      try {
        const storedBooksString = localStorage.getItem('books')
        if (storedBooksString) {
          const storedBooks = JSON.parse(storedBooksString) as IBook[]
          setBooks(storedBooks)
          setFilteredBooks(storedBooks)
        } else {
          setBooks(BOOKS)
          setFilteredBooks(BOOKS)
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Error getting books from localStorage:', error)
        setIsLoading(false)
      }
    }

    if (typeof window !== 'undefined') {
      loadBooksFromLocalStorage()
    }
  }, [])

  useEffect(() => {
    setFilteredBooks(books)
  }, [books])

  const contextValue = useMemo(
    () => ({
      books,
      addBook,
      editBook,
      deleteBook,
      currentPage,
      setCurrentPage,
      toastMessage,
      setToastMessage,
      showToast,
      setShowToast,
      closeToast,
      searchBooks,
      filteredBooks,
    }),
    [
      books,
      addBook,
      editBook,
      deleteBook,
      currentPage,
      toastMessage,
      showToast,
      searchBooks,
      filteredBooks,
    ],
  )

  return (
    <BookContext.Provider value={contextValue}>
      {isLoading ? <LoadingSkeleton /> : children}
    </BookContext.Provider>
  )
}
