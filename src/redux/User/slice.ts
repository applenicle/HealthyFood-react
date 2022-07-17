import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,
  token: null,
  displayName: 'sssss',
  mode: !false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.token = action.payload;
      state.id = action.payload;
      state.displayName = action.payload;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.displayName = '';
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
