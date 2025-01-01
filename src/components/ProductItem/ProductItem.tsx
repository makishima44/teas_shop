import { useSelector } from "react-redux";
import { SimpleProductType } from "../../types/types";
import styles from "./ProductItem.module.css";
import { RootState } from "../../redux/store";

export const ProductItem = ({ name, price }: SimpleProductType) => {
  const currency = useSelector((state: RootState) => state.product.currency);

  return (
    <div className={styles.productItemBlock}>
      <div>{name}</div>
      <div>
        price:
        <span> {Math.floor(price)} </span>
        <span>{currency}</span>
      </div>
    </div>
  );
};
