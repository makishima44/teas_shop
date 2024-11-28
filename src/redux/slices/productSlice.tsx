import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
// import { productInitialState } from "../initialStates/productInitialState";
import axios from "axios";
import { ProductType } from "../../types/types";
import { RootState } from "../store";

interface ProductState {
  teaList: ProductType[];
}

const initialState: ProductState = {
  teaList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.teaList = action.payload;
    },

    sortPrice(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "priceAsc":
          state.teaList.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          state.teaList.sort((a, b) => b.price - a.price);
          break;
        case "popularityAsc":
          state.teaList.sort((a, b) => a.popularity - b.popularity);
          break;
        case "popularityDesc":
          state.teaList.sort((a, b) => b.popularity - a.popularity);
      }
    },
  },
});

export const fetchProducts =
  (): ThunkAction<void, RootState, unknown, PayloadAction<ProductType[]>> => async (dispatch) => {
    try {
      const response = await axios.get("https://my-json-server.typicode.com/makishima44/tea-shop-data/teaList");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error data loading", error);
    }
  };

export const { sortPrice, setProducts } = productSlice.actions;

export default productSlice.reducer;
