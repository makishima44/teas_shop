import { createSlice } from "@reduxjs/toolkit";
import { productInitialState } from "../initialStates/productInitialState";

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    sortPrice(state, action) {
      switch (action.payload) {
        case "priceAsc":
          state.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          state.sort((a, b) => b.price - a.price);
          break;
        case "popularityAsc":
          state.sort((a, b) => a.popularity - b.popularity);
          break;
        case "popularityDesc":
          state.sort((a, b) => b.popularity - a.popularity);
      }
    },
  },
});

export const { sortPrice } = productSlice.actions;

export default productSlice.reducer;
