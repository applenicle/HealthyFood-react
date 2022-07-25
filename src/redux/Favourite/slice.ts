import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FavSlice = {
  id: string;
  price: number;
  rating: number;
  time: number;
  imageUrl: string;
  title: string;
};

interface IFavSlice {
  items: FavSlice[];
}

const initialState = {
  items: [],
} as IFavSlice;

export const FavouriteSlice = createSlice({
  name: 'Favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const fav = state.items.find((item) => item.id === action.payload.id);
      if (!fav) {
        state.items.push({
          ...action.payload,
        });
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFav: (state) => {
      state.items = [];
    },
  },
});
export const { addToFavourite, clearFav, removeFavourite } = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
