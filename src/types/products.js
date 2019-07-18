// @flow
export type ProductType = {
  title: string,
  subtitle: string,
  image: string,
  id: string,
  price: string,
  quantity: number,
  description: string
};

export type ProductsArrayType = ProductType[];

export const ProductActions = {
  GET_PRODUCT_ID: "products/GET_PRODUCT_ID",
  UPDATE_PRODUCT_QUANTITY: "products/UPDATE_PRODUCT_QUANTITY"
};

type GetProductIdType = {
  type: typeof ProductActions.GET_PRODUCT_ID,
  product: ProductType
};

export type UpdateProductQuantityType = {
  type: typeof ProductActions.GET_PRODUCT_ID,
  product: ProductType,
  productId: string
};

export type ProductActionsType = GetProductIdType | UpdateProductQuantityType;
