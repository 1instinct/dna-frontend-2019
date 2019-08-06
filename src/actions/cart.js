export const ADD_TO_CART = "cart/ADD_TO_CART";
export const UPDATE_CART_ITEM = "cart/UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

// called in SingleProduct:
export const addToCart = (id, amount) => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: { id, amount } });
};

export const updateCartItem = (id, amount) => dispatch => {
  dispatch({ type: UPDATE_CART_ITEM, payload: { id, amount } });
};

// called in CartMenu:
export const removeFromCart = id => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
