import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { STORAGE } from 'defines'
import { State } from './type'

const initialState: State = {
  accessToken: localStorage.getItem(STORAGE.ACCESS_TOKEN) || null
}

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clean: () => initialState,
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    clearToken: (state) => {
      state.accessToken = null
    }
  }
})

// Action creators are generated for each case reducer function
export const userActions = {
  ...slice.actions
}

export const { reducer } = slice
