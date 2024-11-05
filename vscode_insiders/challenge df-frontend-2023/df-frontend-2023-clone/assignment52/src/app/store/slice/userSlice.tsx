'use client'

import { saveToLocalStorage } from '@/app/function/localStorage'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserSlice {
  userCurrent?: IUser
}

const check =
  typeof window !== 'undefined' ? localStorage.getItem('userCurrent') : null

const initialState: IUserSlice = {
  userCurrent: check ? JSON.parse(check) : undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<IUser>) => {
      state.userCurrent = actions.payload
      saveToLocalStorage('userCurrent', actions.payload)
    },
    logout: (state) => {
      state.userCurrent = undefined
      localStorage.removeItem('userCurrent')
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
