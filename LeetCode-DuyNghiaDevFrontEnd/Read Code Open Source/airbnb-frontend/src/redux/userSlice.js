import { createSlice } from '@reduxjs/toolkit'
import { userAdminLocalStorage, userLocalStorage } from '../api/localService'
import { DEFAULT_DATE_RANGE, DEFAULT_PEOPLE_COUNT, DEFAULT_PLACE } from '../constants/defaultValues'

const initialState = {
  user: userLocalStorage.get(),
  diaDiem: DEFAULT_PLACE,
  dateRange: DEFAULT_DATE_RANGE,
  soNguoi: DEFAULT_PEOPLE_COUNT,
  // admin page
  userAdmin: userAdminLocalStorage.get(),
  allUsers: null,
  totalUsers: null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload
    },
    setDiaDiem: (state, action) => {
      state.diaDiem = action.payload
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload
    },
    setSoNguoi: (state, action) => {
      state.soNguoi = action.payload
    },
    setLoginAdmin: (state, action) => {
      state.userAdmin = action.payload
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload
    },
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload
    }
  }
})

export const {
  setLogin,
  setDiaDiem,
  setDateRange,
  setSoNguoi,
  setLoginAdmin,
  getAllUsers,
  setTotalUsers
} = userSlice.actions
export default userSlice.reducer
