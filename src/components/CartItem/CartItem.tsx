import { ProductTypeForCart } from "../../redux/slices/productSlice";
import style from "./CartItem.module.css";

export const CartItem = ({ name, quantity }: ProductTypeForCart) => {
  return (
    <div className={style.cartItemBlock}>
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  );
};
