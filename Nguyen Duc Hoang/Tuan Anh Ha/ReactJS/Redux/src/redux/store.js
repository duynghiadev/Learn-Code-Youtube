import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/taskSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer
  }
})
