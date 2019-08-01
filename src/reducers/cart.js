import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, ADD_UPDATE_SHIPPING_METHOD } from "../actions/cart";

const intialState = {
  products: [],
  shippingMethod: null,
  shippingAddress: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      if (!state.products.find(product => product._id === action.payload.product._id)) {
        console.log(action);
        return {
          ...state,
          products: state.products.concat([action.payload.product]),
        };
      } else {
        return state
      }
    case REMOVE_PRODUCT_CART:
      const productId = action.payload.productId;
      return {
        ...state,
        products: state.products.filter(product => product._id !== productId)
      };
    case ADD_UPDATE_SHIPPING_METHOD:
      const shippingMethod = action.payload.shippingMethod;
      return {
        ...state,
        shippingMethod,
      };
    default:
      return state;
  }
};
