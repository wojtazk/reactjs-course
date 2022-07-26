import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import notificationSlice from './notificationSlice';
import productsSlice from './productsSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    notification: notificationSlice,
  },
});
