import { Link } from "react-router-dom";
import cartIcon from "../../assects/img/cartIcon.svg";
import currencyIcon from "../../assects/img/changeCurrency.svg";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerTitle}>TEA SHOP</h1>
      <div className={style.headerUtilities}>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>

        <img style={{ height: "24px", width: "24px" }} src={currencyIcon} alt="" />
      </div>
    </div>
  );
};
