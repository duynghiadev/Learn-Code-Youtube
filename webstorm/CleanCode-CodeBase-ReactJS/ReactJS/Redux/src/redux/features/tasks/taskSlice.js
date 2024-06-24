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
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload
      const task = state.find((task) => task.id === id)
      task.text = text
      return state
    }
  }
})

export const { addTask, deleteTask, updateTask } = tasksSlice.actions

export default tasksSlice.reducer
