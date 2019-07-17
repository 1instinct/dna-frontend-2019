export const TOGGLE_SIDE_MENU = "ui/TOGGLE_SIDE_MENU";
export const TOGGLE_NAV_BANNER = "ui/TOGGLE_NAV_BANNER";
export const SET_ROUTE = "ui/SET_ROUTE";

export const toggleSideMenu = payload => dispatch =>
  dispatch({ type: TOGGLE_SIDE_MENU, payload });

export const setRoute = pathname => dispatch =>
  dispatch({ type: SET_ROUTE, payload: pathname });

export const toggleBanner = () => dispatch =>
  dispatch({ type: TOGGLE_NAV_BANNER });
