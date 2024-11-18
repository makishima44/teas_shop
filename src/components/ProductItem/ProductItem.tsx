import { SimpleProductType } from "../../redux/slices/productSlice";

import styles from "./ProductItem.module.css";

export const ProductItem = ({ name, price }: SimpleProductType) => {
  return (
    <div className={styles.productItemBlock}>
      <div>{name}</div>
      <div>price: {price}</div>
    </div>
  );
};
