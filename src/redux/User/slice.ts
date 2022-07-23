import { createSlice } from '@reduxjs/toolkit';

type UserState = {
  email: null;
  id: null;
  token: null;
  displayName: null;
  mode: boolean;
};

const initialState = {
  email: null,
  id: null,
  token: null,
  displayName: null,
  mode: !false,
} as UserState;

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.displayName = null;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setUser, removeUser, setDisplayName, setMode } = UserSlice.actions;

export default UserSlice.reducer;
