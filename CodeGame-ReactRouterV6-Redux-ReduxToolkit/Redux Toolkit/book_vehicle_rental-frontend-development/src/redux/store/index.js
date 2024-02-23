import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import { carSlice } from '../slices/carSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cars: carSlice.reducer,
  },
});

export default store;
