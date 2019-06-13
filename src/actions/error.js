// @flow
import { errors } from "@spree/storefront-api-v2-sdk";
import type { ThunkType, DispatchType } from "../types";
export const LOGIN_ERROR = "error/LOGIN_ERROR";
export const REFRESH_ERROR = "error/REFRESH_ERROR";
export const GET_CLIENT_ACCOUNT_ERRROR = "error/GET_CLIENT_ACCOUNT_ERRROR";

export const spreeError = (type: string, fail: errors): ThunkType => (
  dispatch: DispatchType
) => {
  if (fail.name === "MisconfigurationError") {
    dispatch({ type, error: fail.MisconfigurationError });
  } else if (fail.name === "NoResponseError") {
    dispatch({ type, error: fail.NoResponseError });
  } else if (fail.name === "SpreeError") {
    dispatch({ type, error: fail.SpreeError });
  } else if (fail.name === "BasicSpreeError") {
    dispatch({ type, error: fail.BasicSpreeError });
  } else if (fail.name === "ExpandedSpreeError") {
    dispatch({ type, error: fail.ExpandedSpreeError });
  }
};
