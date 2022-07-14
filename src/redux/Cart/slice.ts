import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  items: [],
};

export const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = DishesSlice.actions;

export default DishesSlice.reducer;
