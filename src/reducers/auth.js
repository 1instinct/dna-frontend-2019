// @flow
import { AuthActions } from "../types/auth";
import type { AuthStateType, AuthActionsType } from "../types/auth";

const initialState = {
  token: null
};

export default (
  state: AuthStateType = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case AuthActions.LOGIN_CLIENT:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
