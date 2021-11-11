import AuthService from "../../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password)
    .then((response) => {
      dispatch({
        type: "REGISTER_SUCCESS",
      });
      dispatch({
        type: "SET_MESSAGE",
        payload: response.data.message,
      });
      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: "REGISTER_FAILED",
      });

      dispatch({
        type: "SET_MESSAGE",
        payload: message,
      });

      return Promise.reject();
    });
};

export const login = (username, password) => (dispatch) => {
  AuthService.login(username, password)
    .then((response) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: response },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: "LOGIN_FAILED",
      });

      dispatch({
        type: "SET_MESSAGE",
        payload: message,
      });

      return Promise.reject();
    });
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: "LOGOUT",
  });
};
