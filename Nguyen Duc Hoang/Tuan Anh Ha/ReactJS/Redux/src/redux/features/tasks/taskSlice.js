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
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
