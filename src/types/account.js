// @flow
// ACTION STRINGS

export const AccountActions = {
  GET_CLIENT_ACCOUNT: "account/GET_CLIENT_ACCOUNT",
  GET_CLIENT_CREDIT_CARDS_LIST: "account/GET_CLIENT_CREDIT_CARDS_LIST",
  GET_CLIENT_DEFAULT_CARD: "account/GET_CLIENT_DEFAULT_CARD",
  GET_CLIENT_COMPLETED_ORDERS_LIST: "account/GET_CLIENT_COMPLETED_ORDERS_LIST"
};

// PAYLOADS

type AccountActionType = {
  type: typeof AccountActions.GET_CLIENT_ACCOUNT,
  account: AccountType
};

type CreditCardsActionType = {
  type: typeof AccountActions.GET_CLIENT_CREDIT_CARDS_LIST,
  creditCards: CreditCardsType
};

type CreditCardActionType = {
  type: typeof AccountActions.GET_CLIENT_DEFAULT_CARD,
  defaultCard: CreditCardType
};

type CompletedOrdersActionType = {
  type: typeof AccountActions.GET_CLIENT_COMPLETED_ORDERS_LIST,
  completedOrders: CompletedOrdersType
};

export type AccountActionsType =
  | AccountActionType
  | CreditCardsActionType
  | CreditCardActionType
  | CompletedOrdersActionType;

// ACTIONS

// STATE

export type AccountStateType = {
  account: null | AccountType,
  creditCards: null | CreditCardsType,
  defaultCard: null | CreditCardType
};

// SPREE TYPES

export type AccountType = {
  id: number,
  type: string,
  attributes: {
    email: string,
    store_credits: number,
    completed_orders: number
  },
  relationships: {
    default_billing_address: {
      data: {
        id: number,
        type: string
      }
    },
    default_shipping_address: {
      data: {
        id: number,
        type: string
      }
    }
  }
};

export type CreditCardType = {
  id: number,
  type: string,
  attributes: {
    cc_type: string,
    last_digits: string,
    month: number,
    year: number,
    name: string,
    default: boolean
  },
  relationships: {
    parment_method: {
      data: {
        id: string,
        type: string
      }
    }
  }
};

export type CreditCardsType = CreditCardType[];

export type CompletedOrderType = any; // eslint-disable-line
export type CompletedOrdersType = CompletedOrderType[];
