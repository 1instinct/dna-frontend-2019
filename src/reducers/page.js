// pageReducer.js
import { NOT_FOUND } from "redux-first-router";
import { Routes } from "../constants";

export const components = {
  ...Routes.RouteComponents,
  [NOT_FOUND]: "home"
};

export default (state = "", action = {}) => components[action.type] || state;
