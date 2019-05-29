import { LOGIN } from "../actions/auth";

const intialState = {
  loggedIn: false
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};
