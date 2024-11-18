import { createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
  popularity: number;
  description: string;
};

export type SimpleProductType = Omit<ProductType, "quantity" | "popularity" | "description">;
export type ProductTypeForCart = Omit<ProductType, "popularity">; //Тип для корзины

const initialState: ProductType[] = [
  {
    id: "1",
    name: "Puer",
    price: 120,
    quantity: 0,
    popularity: 5,
    description:
      "Чай пуэр - вид чая, выделенный в отдельную, достаточно обширную, категорию. Тут вам и зеленый (Шен пуэры) или зрелый (Шу), прессованный (блины, точи, кирпичи и пр.) или рассыпной, молодой или выдержанный, c разных регионов, c различного вида кустов и пр. И все эти параметры влияют на вкус, аромат и эффект от каждого конкретного экземпляра. ",
  },
  {
    id: "2",
    name: "Oolong",
    price: 300,
    quantity: 0,
    popularity: 3,
    description:
      "разновидность чая, который в общей классификации занимает место между зеленым (绿茶, Люй Ча) и красным (红茶, Хун Ча) и является полу-ферментированным (т.е. имеет среднюю степень окисления). Чай данной группы можно разделить на два типа: темные (сильно-ферментированные) и светлые (слабо-ферментированные), которые производятся в различных регионах и имеют отличительные черты как в аромате и вкусе, так и во внешнем виде.",
  },
  {
    id: "3",
    name: "Red Tea",
    price: 240,
    quantity: 0,
    popularity: 2,
    description:
      "Красный чай (чаще известен как черный) — это насыщенный и ароматный напиток с ярким вкусом и глубоким цветом. Листья полностью ферментируются, придавая напитку интенсивный вкус с оттенками пряностей, меда или сухофруктов. Отличный выбор для любителей крепкого чая.",
  },
  {
    id: "4",
    name: "Black Tea",
    price: 180,
    quantity: 0,
    popularity: 0,
    description:
      "это целая группа чаев, которые прошли процесс “влажного скирдования” (или “Во дуй”) на стадии производства. Это пост-ферментированный чай (ферментация доходит до 100%). Хэй Ча производят в разных районах и провинциях, это местечковые чаи и они очень разнообразны. Наиболее известные места произрастания и производства – провинции Хунань, Сычуань (в основном экспортируется в Тибет), Аньхой (Лю Ань Ча), Хубэй, Гуанси (Лю Бао Ча), Гуандун, Юньнань (всем известные шу и шен пуэры).",
  },
  {
    id: "5",
    name: "Green Tea",
    price: 85,
    quantity: 0,
    popularity: 2,
    description:
      "Зеленый чай — это легкий и освежающий напиток, богатый антиоксидантами. Листья обрабатываются минимально, сохраняя естественный цвет и полезные свойства. Имеет мягкий вкус с нотками трав и цветов. Отлично тонизирует и подходит для ежедневного употребления. ",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sortPrice(state, action) {
      switch (action.payload) {
        case "priceAsc":
          state.sort((a, b) => a.price - b.price);
          break;
        case "priceDesc":
          state.sort((a, b) => b.price - a.price);
          break;
        case "popularityAsc":
          state.sort((a, b) => a.popularity - b.popularity);
          break;
        case "popularityDesc":
          state.sort((a, b) => b.popularity - a.popularity);
      }
    },
  },
});

export const { sortPrice } = productSlice.actions;

export default productSlice.reducer;
