import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './slices/Filter/FilterSlice';

export const store = configureStore({
  reducer: {
    FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
