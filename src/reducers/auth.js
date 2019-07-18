// @flow
import { AuthActions } from "../types/auth";
import type { AuthActionsType } from "../types/auth";

const initialState = {
  loggedIn: false
};

type AuthStateType = typeof initialState;

export default (
  state: AuthStateType = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};
