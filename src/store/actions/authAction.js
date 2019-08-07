import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFails = error => {
  return { type: actionTypes.AUTH_FAILS, error: error };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaoAuTv_UIQjUTDS2ccOuD0vwKnmocBT8";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaoAuTv_UIQjUTDS2ccOuD0vwKnmocBT8";
    }

    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFails(error));
      });
  };
};
