import { saveToLocalStorage } from '@/app/function/localStorage'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IBooksSlice {
  books: IBook[]
  count: number
  filteredBooks: IBook[]
  nameBookDelete?: string
  currentPage: number
  totalPages: number
}

const initialState: IBooksSlice = {
  books: [],
  count: 0,
  filteredBooks: [],
  nameBookDelete: undefined,
  currentPage: 1,
  totalPages: 1,
}
const sliceBooks = (array: IBook[], curentPage: number) => {
  return array.slice((curentPage - 1) * 5, curentPage * 5)
}
const calcPage = (length: number) => {
  if (length > 5) {
    return Math.floor(length / 5) + 1
  }
  if (length > 0) {
    return 1
  }
  return 0
}
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload
      state.count = action.payload.length
      state.totalPages = calcPage(action.payload.length)
      state.filteredBooks = sliceBooks(action.payload, state.currentPage)
      saveToLocalStorage('books', action.payload)
    },
    setNameBookDelete: (state, action: PayloadAction<string>) => {
      state.nameBookDelete = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      state.filteredBooks = sliceBooks(state.books, state.currentPage)
    },

    addBook: (state, action: PayloadAction<IBook>) => {
      const id = state.count + 1
      state.count = id
      const bookAdd: IBook = {
        id: id.toString(),
        ...action.payload,
      } as IBook
      const list = [bookAdd, ...state.books]
      state.books = list
      state.totalPages = calcPage(list.length)
      state.filteredBooks = sliceBooks(list, state.currentPage)
      saveToLocalStorage('books', list)
    },
    removeBook: (state) => {
      const list = state.books.filter(
        (book) => book.name !== state.nameBookDelete,
      )
      state.books = list
      state.count -= 1
      state.totalPages = calcPage(list.length)
      state.filteredBooks = sliceBooks(list, state.currentPage)
      saveToLocalStorage('books', list)
    },
    editBook: (state, action: PayloadAction<IBook>) => {
      const list = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book,
      )
      state.books = list
      state.filteredBooks = sliceBooks(list, state.currentPage)
      saveToLocalStorage('books', list)
    },
    filteredBooks: (state, actions: PayloadAction<string>) => {
      const list = state.books.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(actions.payload.toLocaleLowerCase()),
      )
      state.currentPage = 1
      state.totalPages = calcPage(list.length)
      state.filteredBooks = sliceBooks(list, state.currentPage)
    },
  },
})

export const {
  setBooks,
  setNameBookDelete,
  setCurrentPage,
  addBook,
  removeBook,
  editBook,
  filteredBooks,
} = booksSlice.actions

export default booksSlice.reducer
