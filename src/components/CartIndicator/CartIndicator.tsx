import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cartIcon from "../../assects/img/cartIcon.svg";
import { RootState } from "../../redux/store";

import style from "./CartIndicator.module.css";

export const CartIndicator = () => {
  const countItems = useSelector((state: RootState) => state.cart.countItems);

  return (
    <div className={style.mainBlock}>
      <Link to="/cart" className={style.link}>
        <img src={cartIcon} alt="" style={{ height: "30px" }} />
        <span>Товаров( {countItems} )</span>
      </Link>
    </div>
  );
};
