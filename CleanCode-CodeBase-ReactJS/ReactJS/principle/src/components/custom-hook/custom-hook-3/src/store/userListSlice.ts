// store/userListSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
}

interface UserListState {
  users: User[]
}

const initialState: UserListState = {
  users: []
}

// Refactored code

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload
      }
      state.users.push(newUser)
    },
    deleteUser: (state, action) => {
      const userId = action.payload
      state.users = state.users.filter((user) => user.id !== userId)
    },
    editUser: (state, action) => {
      const { userId, newName } = action.payload
      state.users = state.users.map((user) =>
        user.id === userId ? { ...user, name: newName } : user
      )
    }
  }
})

export const { addUser, deleteUser, editUser } = userListSlice.actions

export default userListSlice.reducer
