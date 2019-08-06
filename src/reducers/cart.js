import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART
} from "../actions/cart";

const initState = {
  cartItems: {}
};

export default (state = initState, action) => {
  const { cartItems } = state;
  const newCartItems = { ...cartItems };

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload.id]: action.payload.amount
        }
      };
    case UPDATE_CART_ITEM:
      newCartItems[action.payload.id] += action.payload.amount;
      return {
        ...state,
        cartItems: newCartItems
      };

    case REMOVE_FROM_CART:
      return {
        ...state
      };
    default:
      return state;
  }
};
