import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";

import styles from "./CartList.module.css";
import { RootState } from "../../redux/store";
import { clearCart, deleteItem } from "../../redux/slices/cartSlice";

import { Link } from "react-router-dom";
import { ProductTypeForCart } from "../../types/types";
import Button from "../Button/Button";

export const CartList = () => {
  const cartList = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

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
      <span>TotalPrice:{totalPrice}</span>
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
