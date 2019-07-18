// @flow
import { store } from "../index";
import type { ProductActionsType } from "./products";
import type { AuthActionsType } from "./auth";

// App State Type
export type ReduxStateType = typeof store.GetStateType;

// Redux thunk Type
export type ThunkType = (DispatchType, GetStateType) => void | Promise<void>;

// type ActionType = AccountActionsType | AuthActionsType | ErrorActionsType;
// eslint-disable-next-line flowtype/no-weak-types
type ActionType = ProductActionsType | AuthActionsType;

// Redux thunk argument Types
export type GetStateType = () => ReduxStateType;
export type PromiseActionType = Promise<ActionType>;
export type DispatchType = (
  action: ActionType | ThunkType | PromiseActionType
) => void;
