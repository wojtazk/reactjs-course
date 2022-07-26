import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // [{id: ID, quantity: AMOUNT, ...productItem}]
    toggleCart: false,
  },

  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      existingItem > -1
        ? (state.cartItems[existingItem].quantity += action.payload.quantity)
        : state.cartItems.push(action.payload);
    },

    removeFromCart(state, action) {
      const existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      state.cartItems[existingItem].quantity === 1
        ? state.cartItems.splice(existingItem, 1)
        : state.cartItems[existingItem].quantity--;
    },

    toggle(state) {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
