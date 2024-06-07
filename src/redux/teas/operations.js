import { createAsyncThunk } from '@reduxjs/toolkit';
import teaAPI from '../../config/teaAPI';

export const fetchTeasThunk = createAsyncThunk(
  'teas/fetchAll',
  async _thunkApi => {
    try {
      const { data } = await teaAPI.get('teas');
      return data;
    } catch (error) {
      return _thunkApi.rejectWithValue(error.message);
    }
  }
);
