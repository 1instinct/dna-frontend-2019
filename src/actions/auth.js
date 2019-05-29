export const LOGIN = "auth/LOGIN";

export const login = (email, pass) => dispatch => {
  if (email && pass) {
    dispatch({ type: LOGIN });
  }
};
