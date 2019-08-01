export const ADD_PRODUCT_CART = "cart/ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "cart/REMOVE_PRODUCT_CART";
export const ADD_UPDATE_SHIPPING_METHOD = "cart/ADD_UPDATE_SHIPPING_METHOD";

export const addProductCart = (product) => dispatch => {
  const payload = product;
  dispatch({ type: ADD_PRODUCT_CART, payload });
};

export const removeProductCart = (productId) => dispatch => {
  const payload = productId;
  dispatch({ type: REMOVE_PRODUCT_CART, payload });
};

export const addUpdateShippingMethod = (shippingMethod) => dispatch => {
  const payload = shippingMethod;
  console.log(payload);
  dispatch({ type: ADD_UPDATE_SHIPPING_METHOD, payload });
};
