import { configureStore } from '@reduxjs/toolkit';
import { teasReducer } from './teas/slice';

export const store = configureStore({
  reducer: {
    teas: teasReducer,
  },
});
