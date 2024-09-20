import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reload: 0
}

const roomSlice = createSlice({
  name: 'roomSlice',
  initialState,
  reducers: {
    reloadData: (state, action) => {
      state.reload += 1
    }
  }
})

export const { reloadData } = roomSlice.actions

export default roomSlice.reducer
