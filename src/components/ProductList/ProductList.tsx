import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

import { ProductSort } from "../ProductSort/ProductSort";
import { ProductItem } from "../ProductItem/ProductItem";
import { ProductType } from "../../redux/slices/productSlice";
import { addItem } from "../../redux/slices/cartSlice";

import styles from "./ProductItem.module.css";

export const ProductList = () => {
  const productArr = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const addItemToCart = (el: ProductType) => {
    dispatch(addItem(el));
  };

  return (
    <div className={styles.root}>
      <h2>Tea List</h2>
      <ProductSort />
      <ul>
        {productArr.map((el) => {
          return (
            <div className={styles.productListBlock} key={el.id}>
              <ProductItem name={el.name} price={el.price} id={el.id} />
              <button onClick={() => addItemToCart(el)}>+</button>
            </div>
          );
        })}
      </ul>
      <Link to="/cart">
        <button>в Корзину</button>
      </Link>
    </div>
  );
};
