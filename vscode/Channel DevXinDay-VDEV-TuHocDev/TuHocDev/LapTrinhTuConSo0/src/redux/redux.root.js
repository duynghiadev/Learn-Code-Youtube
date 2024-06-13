import { createSlice } from '@reduxjs/toolkit'

export const rootReducer = createSlice({
  name: 'appStore',
  initialState: {
    tieudeungdung: ''
  },
  reducers: {
    setTieude: (state, action) => {
      state.tieudeungdung = action.payload
    }
  }
})

export default rootReducer.reducer
export const { setTieude } = rootReducer.actions
