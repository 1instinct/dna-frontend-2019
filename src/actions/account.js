// @flow
import type { ThunkType, DispatchType } from "../types";
import type { TokenType } from "../types/auth";
import type {
  AccountType,
  CreditCardType,
  CreditCardsType,
  CompletedOrdersType
} from "../types/account";
import { AccountActions } from "../types/account";
import client from "../SpreeClient";
import { spreeError, GET_CLIENT_ACCOUNT_ERRROR } from "./error.js";

export const getClientAccount = (token: TokenType): ThunkType => async (
  dispatch: DispatchType
) => {
  const { fail, isSuccess, success } = await client.account.accountInfo({
    bearerToken: token.access_token
  });
  if (isSuccess()) {
    const account: AccountType = success();
    dispatch({
      type: AccountActions.GET_CLIENT_ACCOUNT,
      account
    });
  } else {
    dispatch(spreeError(GET_CLIENT_ACCOUNT_ERRROR, fail()));
  }
};

export const getClientCreditCardsList = (token: TokenType): ThunkType => async (
  dispatch: DispatchType
) => {
  const { fail, isSuccess, success } = await client.account.creditCardsList({
    bearerToken: token.access_token
  });

  if (isSuccess()) {
    const creditCards: CreditCardsType = success();
    dispatch({
      type: AccountActions.GET_CLIENT_CREDIT_CARDS_LIST,
      creditCards
    });
  } else {
    dispatch(spreeError(AccountActions.GET_CLIENT_CREDIT_CARDS_LIST, fail()));
  }
};

export const getClientDefaultCard = (token: TokenType): ThunkType => async (
  dispatch: DispatchType
) => {
  const { fail, isSuccess, success } = await client.account.creditCardsList({
    bearerToken: token.access_token
  });
  if (isSuccess()) {
    const defaultCard: CreditCardType = success();
    dispatch({
      type: AccountActions.GET_CLIENT_DEFAULT_CARD,
      defaultCard
    });
  } else {
    dispatch(spreeError(AccountActions.GET_CLIENT_DEFAULT_CARD, fail()));
  }
};

export const getClientCompletedOrdersList = (
  token: TokenType
): ThunkType => async (dispatch: DispatchType) => {
  const { fail, isSuccess, success } = await client.account.creditCardsList({
    bearerToken: token.access_token
  });

  if (isSuccess()) {
    const completedOrders: CompletedOrdersType = success();
    dispatch({
      type: AccountActions.GET_CLIENT_CREDIT_CARDS_LIST,
      completedOrders
    });
  } else {
    dispatch(
      spreeError(AccountActions.GET_CLIENT_COMPLETED_ORDERS_LIST, fail())
    );
  }
};
