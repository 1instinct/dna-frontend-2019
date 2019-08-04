export const ADD_TO_CART = "cart/ADD_TO_CART";
export const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

// called in SingleProduct:
export const addToCart = item => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

// called in CartMenu:
export const removeFromCart = index => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: index });
};
