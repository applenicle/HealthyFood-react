import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchDishes } from './asyncAction';
import { IDishesSlice, Status } from './types';

const initialState: IDishesSlice = {
  items: [],
  status: Status.LOADING,
};

export const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchDishes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = DishesSlice.actions;

export default DishesSlice.reducer;
