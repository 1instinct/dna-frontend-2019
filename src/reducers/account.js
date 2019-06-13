// @flow
import { AccountActions } from "../types/account";
import type { AccountStateType, AccountActionsType } from "../types/account";

const initialState = {
  account: null,
  creditCards: null,
  defaultCard: null
};

export default (
  state: AccountStateType = initialState,
  action: AccountActionsType
): AccountStateType => {
  switch (action.type) {
    case AccountActions.GET_CLIENT_ACCOUNT:
      return {
        ...state,
        account: action.account
      };
    default:
      return state;
  }
};
