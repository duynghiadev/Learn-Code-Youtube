import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: uuidv4(),
        text: action.payload
      }
      return [...state, task]
    }
  }
})

export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer
