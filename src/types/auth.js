// @flow
// ACTION STRINGS

// SPREE TYPES

export type TokenType = {
  access_token: string,
  token_type: "Bearer",
  expires_in: number,
  refresh_token: string,
  created_at: number
};

export const AuthActions = {
  GET_TOKEN: "auth/GET_TOKEN",
  LOGIN_CLIENT: "auth/LOGIN_CLIENT"
};

// ACTIONS

type GetTokenActionType = {
  type: typeof AuthActions.GET_TOKEN,
  token: TokenType
};

export type AuthActionsType = GetTokenActionType;

// STATE

export type AuthStateType = {
  token: null | TokenType
};
