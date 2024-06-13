import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
  const response = await axios.get('http://localhost:8080/users/all')
  return response.data
})

const initialState = {
  listUsers: [],
  isLoading: false,
  isError: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        // Add user to the state array
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.listUsers = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        // Add user to the state array
        state.isLoading = false
        state.isError = true
      })
  }
})

export default userSlice.reducer
