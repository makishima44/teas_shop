import { Route, Routes } from "react-router-dom";

import { ProductList } from "./components/ProductList/ProductList";
import { CartList } from "./components/CartList/CartList";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { ProductType } from "./types/types";
import { Header } from "./components/Header/Header";

import "./App.css";

export type ProductArrType = ProductType[];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentBlock">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
