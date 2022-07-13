import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './Filter/slice';
import DishesReducer from './Dishes/slice';
import { useDispatch } from 'react-redux';
// import CartReducer from './slices/Ca';

export const store = configureStore({
  reducer: {
    FilterReducer,
    DishesReducer,
    // CartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
