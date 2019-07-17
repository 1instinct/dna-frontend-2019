// @flow
import { TOGGLE_SIDE_MENU, TOGGLE_NAV_BANNER, SET_ROUTE } from "../actions/ui";

const initialState = {
  sideMenuIsOpen: false,
  navBanner: true
};

type UiStateType = typeof initialState;

export default (
  state: UiStateType = initialState,
  // eslint-disable-next-line flowtype/no-weak-types
  action: { type: string, payload: any }
): UiStateType => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        sideMenuIsOpen: action.payload || !state.sideMenuIsOpen
      };
    case TOGGLE_NAV_BANNER:
      return {
        ...state,
        navBanner: !state.navBanner
      };
    case SET_ROUTE:
      return {
        ...state,
        pathname: action.payload
      };
    default:
      return state;
  }
};
