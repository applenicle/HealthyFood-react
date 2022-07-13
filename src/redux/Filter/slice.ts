import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// rating: number;
// time: number;
// title: string;
// price: number;

type State = {
  value: string;
  categoryID: number;
};

const initialState = {
  value: '',
  categoryID: 0,
} as State;

export const FilterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.categoryID = action.payload;
    },
  },
});

export const { setValue, setCategory } = FilterSlice.actions;

export default FilterSlice.reducer;
