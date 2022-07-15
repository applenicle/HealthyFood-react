import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './Filter/slice';
import DishesReducer from './Dishes/slice';
import UserReducer from './User/slice';
import CartReducer from './Cart/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    FilterReducer,
    DishesReducer,
    CartReducer,
    UserReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
