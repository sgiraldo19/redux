import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './counterSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
