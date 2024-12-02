import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cartIcon from "../../assects/img/cartIcon.svg";
import { RootState } from "../../redux/store";

import style from "./CartIndicator.module.css";

export const CartIndicator = () => {
  const countItems = useSelector((state: RootState) => state.cart.countItems);

  return (
    <div className={style.mainBlock}>
      <Link to="/cart">
        <img src={cartIcon} alt="" />
        Товаров({countItems})
      </Link>
    </div>
  );
};
