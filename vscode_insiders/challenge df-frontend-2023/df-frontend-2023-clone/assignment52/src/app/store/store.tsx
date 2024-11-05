import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import themeSlice from './slice/themeSlice'
import booksSlice from './slice/booksSlice'
import modalSlice from './slice/modalSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
    books: booksSlice,
    modal: modalSlice,
  },
})

export type IRootState = ReturnType<typeof store.getState>
export type IAppDispatch = typeof store.dispatch
export default store
