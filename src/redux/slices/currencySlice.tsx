import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "BYN",
    exchangeRate: 3.4,
  },
  reducers: {
    setCurrency(state, action: PayloadAction<{ currency: "BYN" | "USD"; rate: number }>) {
      state.currency = action.payload.currency;
      state.exchangeRate = action.payload.rate;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
