import userApi from '../api/userApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMe = createAsyncThunk('user/getMe', async (params, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const currentUser = await userApi.getMe()
  return currentUser
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {}
  },
  reducers: {},
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload
    }
  }
})

const { reducer: userReducer } = userSlice
export default userReducer
