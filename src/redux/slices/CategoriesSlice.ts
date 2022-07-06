import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  test: 0,
};
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    func: (state, action: PayloadAction<number>) => {
      state.test = action.payload;
    },
  },
});

export const { func } = categoriesSlice.actions;

export default categoriesSlice.reducer;
