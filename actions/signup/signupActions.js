import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOG_OUT
  } from './signupActionTypes';
  
  export const singupRequest = (username, phone, password) => ({
    type: SIGNUP_REQUEST,
    data: { username, phone, password },
  });
  export const singupSuccess = data => ({
    type: SIGNUP_SUCCESS,
    data,
  });
  export const singupError = data => ({
    type: SIGNUP_FAIL,
    data,
  });

  export const singupLogout = () => ({
    type: LOG_OUT,
  });
  