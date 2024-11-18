import { createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
  popularity: number;
};

export type SimpleProductType = Omit<ProductType, "quantity" | "popularity">;
export type ProductTypeForCart = Omit<ProductType, "popularity">; //Тип для корзины

const initialState: ProductType[] = [
  { id: "1", name: "Puer", price: 120, quantity: 0, popularity: 5 },
  { id: "2", name: "Oolong", price: 300, quantity: 0, popularity: 3 },
  { id: "3", name: "Red Tea", price: 240, quantity: 0, popularity: 2 },
  { id: "4", name: "Black Tea", price: 180, quantity: 0, popularity: 0 },
  { id: "5", name: "Green Tea", price: 85, quantity: 0, popularity: 2 },
];

const productSlice = createSlice({
  name: "product",
  initialState,
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
