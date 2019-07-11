export const GET_PRODUCT_ID = "products/GET_PRODUCT_ID";
export const UPDATE_PRODUCT_QUANTITY = "products/UPDATE_PRODUCT_QUANTITY";

export const getProductId = id => (dispatch, getState) => {
  const { products } = getState();
  dispatch({ type: GET_PRODUCT_ID, payload: products[id] });
};

export const updateProductQuantity = (id, change) => (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  const product = { ...products[id] };

  product.quantity += change;
  if (product.quantity < 0) product.quantity = 0;

  dispatch({ type: UPDATE_PRODUCT_QUANTITY, productId: product.id, product });
};
