import {  configureStore } from '@reduxjs/toolkit'

import userReducer  from '../Reducers/userReducer.tsx'
import {createLogger}  from 'redux-logger'

const loggerMiddleware= createLogger()


export const store = configureStore({
  reducer:userReducer ,
  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(loggerMiddleware),
 
})
  export type AppDispatch = typeof store.dispatch;
