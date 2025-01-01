import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import currencySlice from "./slices/currencySlice";

export const store = configureStore({
  reducer: { product: productSlice, cart: cartSlice, currency:currencySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
