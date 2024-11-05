'use client'

import { Auth } from '@/generated/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUserState {
  userCurrent?: Auth
}

const initialState: IUserState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state, actions: PayloadAction<Auth>) => {
      state.userCurrent = actions.payload
    },
    logout: () => {
      return initialState
    },
  },
})

export const { signin, logout } = userSlice.actions

export default userSlice.reducer
