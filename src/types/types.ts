export type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
  popularity: number;
  description: string;
};

export type SimpleProductType = Omit<ProductType, "quantity" | "popularity" | "description">; //Тип

export type ProductTypeForCart = Omit<ProductType, "popularity" | "description">; //Тип для корзины
