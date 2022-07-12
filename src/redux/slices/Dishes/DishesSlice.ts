import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading',
}

const initialState = {
  items: [],
  status: Status.LOADING,
};
export const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetching.pending, (state, action) => {
  //     state.status = Status.LOADING;
  //     state.items = [];
  //   });

  //   builder.addCase(fetching.fulfilled, (state, action) => {
  //     state.items = action.payload;
  //     state.status = Status.SUCCESS;
  //   });

  //   builder.addCase(fetching.rejected, (state, action) => {
  //     state.status = Status.ERROR;
  //     state.items = [];
  //   });
  // },
});

// export const { add } = DishesSlice.actions;

export default DishesSlice.reducer;
