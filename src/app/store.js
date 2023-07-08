import { configureStore } from '@reduxjs/toolkit';
import netflixReducers from '../features/netflix/netflixSlice';

export const store = configureStore({
  reducer: {
    netflix: netflixReducers,
  },
});
