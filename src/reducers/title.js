/* global process */
import { Routes } from "../constants";
const DEFAULT = process.env.SITE_TITLE;

export default (state = DEFAULT, action = {}) =>
  Routes.RouteTitles[action.type] || state;
