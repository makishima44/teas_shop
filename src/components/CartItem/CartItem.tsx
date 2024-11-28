import { ProductTypeForCart } from "../../types/types";
import style from "./CartItem.module.css";

export const CartItem = ({ name, quantity }: ProductTypeForCart) => {
  return (
    <div className={style.cartItemBlock}>
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  );
};
