import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import serviceSlice  from './serviceSlice'
import reservateSlice from './reservateSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    service:serviceSlice,
    reservation:reservateSlice
  },
})