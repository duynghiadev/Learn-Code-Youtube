'use client'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Chọn cách lưu trữ dữ liệu, bạn có thể chọn loại lưu trữ khác nhau
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'

import booksSlice from './slice/booksSlice'
import modalSlice from './slice/modalSlice'

const persistConfig = {
  key: 'root', // key này làm việc với local storage để lưu trữ dữ liệu
  storage,
  // Đặt các khóa mà bạn muốn lưu trữ (ví dụ: 'user', 'theme', 'books', 'modal')
  whitelist: ['user', 'theme', 'books', 'modal'],
}

const rootReducer = combineReducers({
  user: userSlice,

  books: booksSlice,
  modal: modalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer, // Sử dụng reducer đã được bọc bởi redux-persist
})

export const persistor = persistStore(store) // Tạo một persistor

export type IRootState = ReturnType<typeof store.getState>
export type IAppDispatch = typeof store.dispatch
export default store
