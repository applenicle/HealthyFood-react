import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,
  token: null,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: any) => {
      state.email = action.payload;
      state.token = action.payload;
      state.id = action.payload;
    },
    removeUser: (state, action: any) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
