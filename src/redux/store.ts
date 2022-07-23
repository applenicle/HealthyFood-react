import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import FilterReducer from './Filter/slice';
import DishesReducer from './Dishes/slice';
import UserReducer from './User/slice';
import FavouriteReducer from './Favourite/slice';
import CartReducer from './Cart/slice';
import { useDispatch } from 'react-redux';
import { fetchDishes } from './Dishes/asyncAction';

const rootReducer = combineReducers({
  FilterReducer,
  DishesReducer,
  CartReducer,
  UserReducer,
  FavouriteReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blackList: [fetchDishes],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
