// @flow
import { store } from "../index";

// App State Type
export type StateType = typeof store;

// Redux thunk Type
export type ThunkType = (DispatchType, GetStateType) => void | Promise<void>;

// type ActionType = AccountActionsType | AuthActionsType | ErrorActionsType;
// eslint-disable-next-line flowtype/no-weak-types
type ActionType = any;

// Redux thunk argument Types
export type GetStateType = () => StateType;
export type PromiseActionType = Promise<ActionType>;
export type DispatchType = (
  action: ActionType | ThunkType | PromiseActionType
) => void;
