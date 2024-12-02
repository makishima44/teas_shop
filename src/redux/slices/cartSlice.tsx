import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

export type CartType = {
  items: ProductType[];
  totalPrice: number;
  countItems: number;
};

const initialState: CartType = {
  items: [],
  totalPrice: 0,
  countItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
      state.countItems += 1;
    },
    deleteItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem?.quantity && existingItem.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      }

      state.totalPrice -= action.payload.price;
      state.countItems -= 1;
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.countItems = 0;
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
