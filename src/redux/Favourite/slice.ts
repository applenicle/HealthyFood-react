import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
} as any;

export const FavouriteSlice = createSlice({
  name: 'Favourite',
  initialState,
  reducers: {
    setFavouriteItem: (state, action) => {},
  },
});
export const { setFavouriteItem } = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
