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
  cartItems: CartItem[];
  modal: boolean;
  totalCount: number;
}

const initialState: CartSliceState = {
  cartItems: [],
  totalPrice: 0,
  modal: !true,
  totalCount: 0,
};

export const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const ID = state.cartItems.find((item) => item.id === action.payload.id);
      if (ID) {
        ID.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((acc, item) => item.count * item.price + acc, 0);
      state.totalCount = state.cartItems.reduce((acc, item) => item.count + acc, 0);
    },
    removeItem: (state, action) => {
      const ID = state.cartItems.find((item) => item.id === action.payload.id);
      if (ID) ID.count--;

      state.totalPrice = state.cartItems.reduce((acc, item) => item.count * item.price + acc, 0);
      state.totalCount = state.cartItems.reduce((acc, item) => item.count + acc, 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.modal = false;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { addItem, clearCart, removeItem, setModal } = DishesSlice.actions;

export default DishesSlice.reducer;
