// @flow

export const AuthActions = {
  LOGIN: "auth/LOGIN"
};

type LoginActionType = {
  type: typeof AuthActions.LOGIN
};

export type AuthActionsType = LoginActionType;
