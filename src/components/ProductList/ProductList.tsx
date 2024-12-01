import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";

import { ProductSort } from "../ProductSort/ProductSort";
import { ProductItem } from "../ProductItem/ProductItem";
import { addItem } from "../../redux/slices/cartSlice";
import { ProductType } from "../../types/types";

import styles from "./ProductItem.module.css";
import Button from "../Button/Button";

export const ProductList = () => {
  const productArr = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const addItemToCart = (el: ProductType) => {
    dispatch(addItem(el));
  };

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
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
              <Button name={"+"} onClick={() => addItemToCart(el)} />
              <Button name={"Подробно"} onClick={() => handleProductClick(el.id)} />
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
