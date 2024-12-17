import { Route, Routes, useLocation } from "react-router-dom";

import { ProductList } from "./components/ProductList/ProductList";
import { CartList } from "./components/CartList/CartList";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { ProductType } from "./types/types";
import { Header } from "./components/Header/Header";
import { CartIndicator } from "./components/CartIndicator/CartIndicator";

import "./App.css";

export type ProductArrType = ProductType[];

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div className="mainBlock">
        {location.pathname !== "/cart" && <CartIndicator />}

        <div className="contentBlock">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
