import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART
} from "../actions/cart";

const initState = {
  cartItems: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, amount, price } = action.payload;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload.id]: {
            ...state.cartItems[action.payload.id],
            id,
            amount,
            price
          }
        }
      };
    }
    case UPDATE_CART_ITEM: {
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload.id]: {
            ...state.cartItems[action.payload.id],
            amount:
              state.cartItems[action.payload.id].amount +
                action.payload.amount || 1
          }
        }
      };
    }

    case REMOVE_FROM_CART: {
      const copy = Object.keys(state.cartItems)
        .filter(key => key !== action.payload)
        .reduce((result, current) => {
          result[current] = state.cartItems[current];
          return result;
        }, {});

      return {
        ...state,
        cartItems: copy
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
