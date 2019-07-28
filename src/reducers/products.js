import {
  GET_PRODUCT_ID,
  UPDATE_PRODUCT_QUANTITY,
  GET_PRODUCTS
} from "../actions/products";
// import { Images } from '../constants';

const initialState = {
  products: {},
  productsList: [],
  singleProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        productList: action.productList
      };
    case GET_PRODUCT_ID:
      return {
        ...state,
        singleProduct: action.payload
      };
    case UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: { ...state.products, [action.productId]: action.product },
        productsList: Object.values({
          ...state.products,
          [action.productId]: action.product
        })
      };
    default:
      return state;
  }
};
