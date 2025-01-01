import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem } from "../CartItem/CartItem";
import { RootState } from "../../redux/store";
import { clearCart, deleteItem } from "../../redux/slices/cartSlice";
import { ProductTypeForCart } from "../../types/types";
import Button from "../Button/Button";

import styles from "./CartList.module.css";

export const CartList = () => {
  const dispatch = useDispatch();

  const cartList = useSelector((state: RootState) => state.cart.items);
  let totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const currency = useSelector((state: RootState) => state.product.currency);

  if (currency === "USD") {
    totalPrice = totalPrice / 3.4;
  }

  const deleteItemFromCartHandler = (el: ProductTypeForCart) => {
    dispatch(deleteItem(el));
  };

  const clearCartHandler = () => {
    const isConfirmed = window.confirm("Вы уверены что хотите очистить корзину?");
    if (isConfirmed) {
      dispatch(clearCart());
    }
  };

  return (
    <div className={styles.root}>
      <Link to="/">Назад</Link>
      <h2>Cart List</h2>
      <div>
        TotalPrice:
        <span> {Math.floor(totalPrice)} </span>
        <span>{currency}</span>
      </div>
      <Button name={"Очистить корзину"} onClick={clearCartHandler}></Button>
      <ul>
        {cartList?.map((el) => {
          return (
            <li className={styles.cartListBlock}>
              <CartItem name={el.name} id={el.id} price={el.price} quantity={el.quantity} />
              <Button name={"Delete"} onClick={() => deleteItemFromCartHandler(el)} />
            </li>
          );
        })}
      </ul>

      <button>Оформить заказ</button>
    </div>
  );
};
