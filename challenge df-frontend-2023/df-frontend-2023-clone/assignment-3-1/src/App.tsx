import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'
import { useLocalStorage } from 'usehooks-ts'
import {
  BookForm,
  BookTable,
  Button,
  Container,
  Dialog,
  Header,
  InputField,
  Pagination,
} from './components'
import ThemeProvider from './contexts/ThemeProvider'
import { Book, BookList } from './types'
import { BOOKS_PER_PAGE } from './utils/constants'
import {
  BOOK_LIST,
  generateRandomString,
  getURLParams,
  removeURLParams,
  setURLParams,
  splitListIntoPages,
} from './utils/functions/index'
import { useProcessDialog } from './utils/hooks'

const App = () => {
  const [searchValue, setSearchValue] = useState(
    () => getURLParams('search') || '',
  )
  const [bookList, setBookList] = useLocalStorage<BookList>(
    'bookList',
    BOOK_LIST,
  )
  const [editedBook, setEditedBook] = useState<Book | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [errorFormMsg, setErrorFormMsg] = useState('')
  const [shouldFocusInput, setShouldFocusInput] = useState(false)
  const [page, setPage] = useState(() => +(getURLParams('page') || 1))

  const firstInputRef = useRef<HTMLInputElement>(null)

  const isEditingBook = Boolean(editedBook)

  const attr = useProcessDialog({
    id: isEditingBook ? 'edit-book-dialog' : 'add-book-dialog',
    titleId: isEditingBook ? 'Edit book' : 'Add book',
    triggerValue: openDialog,
    onClose: () => {
      setEditedBook(null)
      setShouldFocusInput(false)

      setOpenDialog(false)
    },
  })

  const filteredBookList = useMemo(() => {
    const filteredList = bookList.filter((book) => {
      const bookTitle = book.title.toLowerCase()
      const searchValueLower = searchValue.toLowerCase()

      return bookTitle.includes(searchValueLower)
    })

    return filteredList
  }, [bookList, searchValue])

  const paginatedBookList = useMemo(() => {
    if (filteredBookList?.length === 0) return []

    return splitListIntoPages(filteredBookList)[page - 1] // page - 1 because page starts from 0
  }, [filteredBookList, page])

  useEffect(() => {
    if (searchValue.trim() === '') {
      removeURLParams('search')
    } else {
      setURLParams('search', searchValue)
      // reset page to 1 when search value changes
      setPage(1)
    }
  }, [searchValue])

  useEffect(() => {
    setURLParams('page', `${page}`)
  }, [page])

  useEffect(() => {
    if (shouldFocusInput) {
      if (!firstInputRef?.current) return

      firstInputRef?.current?.focus()
    }
  }, [shouldFocusInput])

  const handleAdd = (
    titleValue: string,
    authorValue: string,
    genreValue: string,
  ) => {
    if (!titleValue.trim() || !authorValue.trim() || !genreValue.trim()) {
      setErrorFormMsg('Please fill in all fields')
      return
    }

    const newBook = {
      id: generateRandomString(),
      title: titleValue,
      author: authorValue,
      genre: genreValue,
    }

    setBookList((prevBookList) => [...prevBookList, newBook])
    setOpenDialog(false)
    setErrorFormMsg('')
  }

  const handleEdit = (
    titleValue: string,
    authorValue: string,
    genreValue: string,
  ) => {
    if (!titleValue.trim() || !authorValue.trim() || !genreValue.trim()) {
      setErrorFormMsg('Please fill in all fields')
      return
    }

    if (!editedBook) return

    const newBook = {
      id: editedBook.id,
      title: titleValue,
      author: authorValue,
      genre: genreValue,
    }

    setBookList((prevBookList) =>
      prevBookList.map((book) => (book.id === editedBook.id ? newBook : book)),
    )
    setOpenDialog(false)
    setErrorFormMsg('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const title = form.elements.namedItem('title') as HTMLInputElement
    const author = form.elements.namedItem('author') as HTMLInputElement
    const genre = form.elements.namedItem('genre') as HTMLSelectElement

    if (isEditingBook) {
      handleEdit(title.value, author.value, genre.value)

      // Show toast
      toast.success(`Book ${title.value} has been edited`)
    } else {
      handleAdd(title.value, author.value, genre.value)

      // Show toast
      toast.success(`Book ${title.value} has been created`)
    }

    // Clear the form
    form.reset()
  }

  const handleDelete = (id: string | number) => {
    setBookList((prevBookList) => prevBookList.filter((book) => book.id !== id))

    // Show toast
    const book = bookList.find((book) => book.id === id)
    if (book) {
      toast.success(`Book ${book.title} has been deleted`)
    }
  }

  const handlePopupEditDialog = (id: string | number) => {
    const book = bookList.find((book) => book.id === id)
    if (book) {
      setEditedBook(book)
      setOpenDialog(true)
    }
  }

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
    <ThemeProvider>
      <Header />

      <main>
        <Container>
          <div className="search__wrapper">
            <div className="search__bar">
              <InputField
                className="search__input"
                value={searchValue}
                onChange={(e) => setSearchValue(e?.target?.value)}
              />

              <Button
                onClick={() => {
                  setShouldFocusInput(true)
                  setOpenDialog(true)
                }}
              >
                Add book
              </Button>

              <Dialog title="Add book" attr={attr}>
                <BookForm
                  editedBook={editedBook}
                  onSubmit={handleSubmit}
                  errorMsg={errorFormMsg}
                  firstInputRef={firstInputRef}
                />
              </Dialog>
            </div>
          </div>

          <BookTable
            bookList={paginatedBookList}
            onDeleteBook={handleDelete}
            onPopupEditDialog={handlePopupEditDialog}
          />

          <div className="pagination__wrapper">
            <Pagination
              totalItems={filteredBookList.flat().length}
              itemsPerPage={BOOKS_PER_PAGE}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          </div>
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
