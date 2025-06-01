import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existItem = state.find(i => i.id === item.id);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart() {
      return [];
    },
    increment(state, action) {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement(state, action) {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement,
} = cartSlice.actions;

export const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

export const selectCartItems = (state) => state.cart;

export default cartSlice.reducer;
