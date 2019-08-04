import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initState = {
  cartItems: []
};

export default (state = initState, action) => {
  const { cartItems } = state;

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...cartItems, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: cartItems.filter((item, i) => i !== action.payload)
      };
    default:
      return state;
  }
};
