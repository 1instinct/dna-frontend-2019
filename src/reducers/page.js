// pageReducer.js
import { NOT_FOUND } from "redux-first-router";

export const components = {
  ROOT: "home",
  HOME: "home",
  USER: "User",
  DEMO: "demo",
  TRACKING: "solutions",
  DELIVERY: "solutions",
  INVENTORY: "solutions",
  RETAIL: "solutions",
  HOW_IT_WORKS: "howitworks",
  [NOT_FOUND]: "home"
};

export default (state = "", action = {}) => components[action.type] || state;
