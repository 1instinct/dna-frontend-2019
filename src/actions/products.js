// @flow
import type { ThunkType, DispatchType, GetStateType } from "../types/redux";
import type { ProductType } from "../types/products";
import { ProductActions } from "../types/products";

export const getProductId = (id: string): ThunkType => (
  dispatch: DispatchType,
  getState: GetStateType
) => {
  const { products } = getState();
  const product: ProductType = products[id];
  dispatch({ type: ProductActions.GET_PRODUCT_ID, product });
};

export const updateProductQuantity = (
  id: string,
  change: number
): ThunkType => (dispatch: DispatchType, getState: GetStateType) => {
  const {
    products: { products }
  } = getState();
  const product: ProductType = { ...products[id] };

  product.quantity += change;
  if (product.quantity < 0) product.quantity = 0;

  dispatch({
    type: ProductActions.UPDATE_PRODUCT_QUANTITY,
    productId: product.id,
    product: product
  });
};
