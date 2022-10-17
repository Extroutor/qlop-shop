import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import catalogReducer from './slices/catalogSlice'

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        user: userReducer,
    },
})