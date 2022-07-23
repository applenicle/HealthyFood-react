import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchParams, ItemsTypes } from './types';

export const fetchDishes = createAsyncThunk<ItemsTypes[], FetchParams>(
  'dishes/fetchByIdStatus',
  async (params) => {
    const { categories, search } = params;
    const { data } = await axios.get<ItemsTypes[]>(
      `https://62c96901d9ead251e8bb4e90.mockapi.io/f?${categories}${search}`,
    );
    return data;
  },
);
