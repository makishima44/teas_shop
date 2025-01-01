import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInitialState } from "../initialStates/productInitialState";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: productInitialState,
  },

  reducers: {
    sortPrice(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "priceAsc":
          state.products.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          state.products.sort((a, b) => b.price - a.price);
          break;
        case "popularityAsc":
          state.products.sort((a, b) => a.popularity - b.popularity);
          break;
        case "popularityDesc":
          state.products.sort((a, b) => b.popularity - a.popularity);
      }
    },

    changeCurrency(state, action: PayloadAction<{ rate: number }>) {
      const rate = action.payload.rate;

      state.products = state.products.map((product) => ({
        ...product,
        price: product.price * rate,
      }));
    },
  },
});

export const { sortPrice, changeCurrency } = productSlice.actions;

export default productSlice.reducer;
