import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";

import { sortPrice } from "../../redux/slices/productSlice";

export const ProductSort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortPrice(event.target.value));
  };

  return (
    <div>
      <label htmlFor="sort">Сортировать по:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="priceAsc">Цене: по возрастанию</option>
        <option value="priceDesc">Цене: по убыванию</option>
        <option value="popularityAsc">Популярности: по возрастанию</option>
        <option value="popularityDesc">Популярности: по убыванию</option>
      </select>
    </div>
  );
};
