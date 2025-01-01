import { Link } from "react-router-dom";
import cartIcon from "../../assects/img/cartIcon.svg";

import style from "./Header.module.css";
import Button from "../Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../redux/slices/productSlice";
import { syncCartWithProducts } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

export const Header = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.product.currency);
  const products = useSelector((state: RootState) => state.product.products);

  const handleCurrencyChange = (newCurrency: "BYN" | "USD") => {
    const rate = newCurrency === "USD" ? 1 / 3.4 : 3.4;
    dispatch(changeCurrency({ currency: newCurrency, rate }));
    dispatch(syncCartWithProducts({ products }));
  };

  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerTitle}>TEA SHOP</h1>
      <div className={style.headerUtilities}>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <Button name={"BYN"} onClick={() => handleCurrencyChange("BYN")} disabled={currency === "BYN"} />
        <Button name={"USD"} onClick={() => handleCurrencyChange("USD")} disabled={currency === "USD"} />
      </div>
    </div>
  );
};
