import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = useSelector((state: RootState) => state.product.find((item) => item.id === id));

  if (!product) {
    return <div>Продукт не найден</div>; // Обработка случая, если продукт не найден
  }

  return (
    <div>
      <h3> {product.name}</h3>W

      {product.description}
    </div>
  );
};
