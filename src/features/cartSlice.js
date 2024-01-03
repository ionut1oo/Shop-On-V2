import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQ: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.id === productId);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQ: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
  },
});

export const { addToCart, incrementQ, decrementQ, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
