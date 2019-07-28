import axios from "axios";
import { API } from "../constants";

export const GET_PRODUCT_ID = "products/GET_PRODUCT_ID";
export const UPDATE_PRODUCT_QUANTITY = "products/UPDATE_PRODUCT_QUANTITY";
export const GET_PRODUCTS = "products/GET_PRODUCTS";

export const getProducts = () => async dispatch => {
  const {
    data: { data: productList }
  } = await axios.get(API.products);
  const products = productList.reduce((acc, cur) => {
    acc[cur.id] = cur;
    acc[cur.id].image =
      "https://s3-us-west-2.amazonaws.com/enchanteddiamonds/rings/454R/glamour-p-lg.jpg";
    return acc;
  }, {});
  dispatch({
    type: GET_PRODUCTS,
    products,
    productList
  });
};

export const getProductId = id => (dispatch, getState) => {
  const { products } = getState();
  dispatch({ type: GET_PRODUCT_ID, payload: products[id] });
};

export const updateProductQuantity = (id, change) => (dispatch, getState) => {
  const {
    products: { products }
  } = getState();
  const product = { ...products[id] };

  product.quantity += change;
  if (product.quantity < 0) product.quantity = 0;

  dispatch({ type: UPDATE_PRODUCT_QUANTITY, productId: product.id, product });
};
