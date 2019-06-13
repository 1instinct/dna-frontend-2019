// @flow
// ACTION STRINGS
import { errors } from "@spree/storefront-api-v2-sdk";

export const ErrorActions = {
  GET_TOKEN: "Error/GET_TOKEN",
  LOGIN_CLIENT: "Error/LOGIN_CLIENT"
};

// ACTIONS

export type ErrorActionsType = {
  type: string,
  error: errors
};
