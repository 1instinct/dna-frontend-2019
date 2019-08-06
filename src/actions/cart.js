export const ADD_TO_CART = "cart/ADD_TO_CART";
export const UPDATE_CART_ITEM = "cart/UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";

// called in SingleProduct:
export const addToCart = (id, amount) => (dispatch, getState) => {
  // dispatch action to add that item to Cart w/ amount passed
  const { cart, products } = getState();

  // if cart is not empty
  Object.keys(cart.cartItems).length > 0
    ? // if id already in cart
      cart.cartItems.hasOwnProperty(id)
      ? // dispatch UPDATE
        dispatch({ type: UPDATE_CART_ITEM, payload: { id, amount } })
      : // not in cart already, dispatch ADD
        dispatch({ type: ADD_TO_CART, payload: { id, amount } })
    : // else cart is empty, dispatch ADD
      dispatch({ type: ADD_TO_CART, payload: { id, amount } });

  products.products[id].subtotal = 1;
};

// called in CartMenu:
export const removeFromCart = id => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
