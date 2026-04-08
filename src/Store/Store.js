import { configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './Todoslice'

export default configureStore({
  reducer: {
    Todo: TodoSlice.reducer
  }
})