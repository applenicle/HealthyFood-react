import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const ID = state.items.findIndex((item) => item.id === action.payload.id);
      if (ID >= 0) {
        state.items[ID] = {
          ...state.items[ID],
          count: state.items[ID].count + 1,
        };
      } else {
        let prodItem = { ...action.payload, count: 1 };
        state.items.push(prodItem);
      }
      state.totalPrice = state.items.reduce((acc, item) => item.count * item.price + acc, 0);
    },
    removeItem: (state, action) => {
      const ID = state.items.findIndex((item) => item.id === action.payload.id);
      if (ID >= 0) {
        state.items[ID] = {
          ...state.items[ID],
          count: state.items[ID].count - 1,
        };
      }
      state.totalPrice = state.items.reduce((acc, item) => item.count * item.price + acc, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearCart, removeItem } = DishesSlice.actions;

export default DishesSlice.reducer;
