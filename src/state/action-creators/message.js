export const setMessage = (message) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MESSAGE",
      payload: message,
    });
  };
};

export const clearMessage = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_MESSAGE",
    });
  };
};
