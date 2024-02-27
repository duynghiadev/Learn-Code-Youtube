import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

const spinnerSlice = createSlice({
  name: 'spinnerSlice',
  initialState,
  reducers: {
    setLoadingOn: (state) => {
      state.isLoading = true
    },
    setLoadingOff: (state) => {
      state.isLoading = false
    }
  }
})

export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions

export default spinnerSlice.reducer
