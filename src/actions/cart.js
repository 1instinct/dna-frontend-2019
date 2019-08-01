export const ADD_PRODUCT_CART = "cart/ADD_PRODUCT_CART";
export const REMOVE_PRODUCT_CART = "cart/REMOVE_PRODUCT_CART";


export const addProductCart = (product) => dispatch => {
  const payload = product;
  dispatch({ type: ADD_PRODUCT_CART, payload });
};

export const removeProductCart = (productId) => dispatch => {
  const payload = productId;
  console.log(payload);
  dispatch({ type: REMOVE_PRODUCT_CART, payload });
};
