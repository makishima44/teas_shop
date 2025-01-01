export type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
  popularity: number;
  description: string;
  image: string;
};

// export type ProductSliceType = {
//   products: ProductType[];
//   currency: "BYN" | "USD";
//   exchangeRate: number;
// };

export type CartSliceType = {
  items: ProductType[];
  totalPrice: number;
  countItems: number;
};

export type SimpleProductType = Omit<ProductType, "quantity" | "popularity" | "description" | "image">;
export type ProductTypeForCart = Omit<ProductType, "popularity" | "description" | "image">; //Тип для корзины
