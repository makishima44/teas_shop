import { SimpleProductType } from "../../types/types";
import styles from "./ProductItem.module.css";

export const ProductItem = ({ name, price }: SimpleProductType) => {
  return (
    <div className={styles.productItemBlock}>
      <div>{name}</div>
      <div>price: {price}</div>
    </div>
  );
};
