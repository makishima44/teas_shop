import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

import styled from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) => state.product.products.find((item) => item.id === id));

  if (!product) {
    return <div>Продукт не найден</div>; // Обработка случая, если продукт не найден
  }

  return (
    <div className={styled.root}>
      <h3>{product.name}</h3>
      <span>{product.description}</span>
      <img className={styled.img} src={product.image} alt="imageTea" />
    </div>
  );
};
