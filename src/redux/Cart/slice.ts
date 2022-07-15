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
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      const findId = state.items.findIndex((item) => item.id === action.payload.id);
      if (findId >= 0) {
        state.items[findId] = {
          ...state.items[findId],
          count: state.items[findId].count + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, count: 1 };
        state.items.push(tempProductItem);
      }
    },
    // dereaseCart(state, action) {
    //   let itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
    //   if (state.items[itemIndex].count > 1) {
    //     state.items[itemIndex].count -= 1;
    //   } else if (state.items[itemIndex].count === 1) {
    //     const restCartItem = state.items.filter((item) => item.id !== action.payload.id);
    //     state.items = restCartItem;
    //   }
    // },

    // addItem: (state, action) => {
    //   // const findId = state.items.find((item: any) => item.id === action.payload.id);
    //   // if (!findId) {
    //   //   // findId
    //   // }
    //   // console.log(findId);
    //   // const find = state.items.find((item: any) => item.id === action.payload.id);
    //   // if (find) {
    //   //   find.count++;
    //   // } else {
    //   //   state.items.push({
    //   //     ...action.payload,
    //   //     count: 1,
    //   //   });
    //   // }
    //   // state.totalPrice = state.items.reduce((sum: any, item: any) => {
    //   //   return item.price * item.count + sum;
    //   // }, 0);
    // },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { setItems, addItem, clearCart } = DishesSlice.actions;

export default DishesSlice.reducer;
