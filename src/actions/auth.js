// @flow
import type { ThunkType, DispatchType } from "../types/redux";
import { AuthActions } from "../types/auth";

export const LOGIN = "auth/LOGIN";

export const login = (email: string, pass: string): ThunkType => (
  dispatch: DispatchType
) => {
  if (email && pass) {
    dispatch({ type: AuthActions.LOGIN });
  }
};
