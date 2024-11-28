import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";

import styles from "./CartList.module.css";
import { RootState } from "../../redux/store";
import { deleteItem } from "../../redux/slices/cartSlice";

import { Link } from "react-router-dom";
import { ProductTypeForCart } from "../../types/types";

export const CartList = () => {
  const cartList = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const deleteItemFromCart = (el: ProductTypeForCart) => {
    dispatch(deleteItem(el));
  };

  return (
    <div className={styles.root}>
      <Link to="/">Назад</Link>
      <h2>Cart List</h2>
      <span>TotalPrice:{totalPrice}</span>
      <ul>
        {cartList?.map((el) => {
          return (
            <li className={styles.cartListBlock}>
              <CartItem name={el.name} id={el.id} price={el.price} quantity={el.quantity} />
              <button onClick={() => deleteItemFromCart(el)}>Delete</button>
            </li>
          );
        })}
      </ul>

      <button>Оформить заказ</button>
    </div>
  );
};
