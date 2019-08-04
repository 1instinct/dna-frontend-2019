export const GET_PRODUCT_ID = "products/GET_PRODUCT_ID";
export const UPDATE_PRODUCT_SUBTOTAL = "products/UPDATE_PRODUCT_SUBTOTAL";

export const getProductId = id => (dispatch, getState) => {
  const { products } = getState();
  dispatch({ type: GET_PRODUCT_ID, payload: products[id] });
};

export const updateProductSubtotal = (id, change) => (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  const product = { ...products[id] };

  product.subtotal += change;
  if (product.subtotal < 1) product.subtotal = 1;

  dispatch({ type: UPDATE_PRODUCT_SUBTOTAL, productId: product.id, product });
};
