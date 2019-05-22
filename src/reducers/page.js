// pageReducer.js
import { NOT_FOUND } from "redux-first-router";

export const components = {
  ROOT: "home",
  HOME: "home",
  USER: "User",
  DEMO: "demo",
  [NOT_FOUND]: "home"
};

export default (state = "home", action = {}) =>
  components[action.type] || state;
