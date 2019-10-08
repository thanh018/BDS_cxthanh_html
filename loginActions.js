import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT,
  } from './loginActionTypes';
  
  export const loginRequest = (username, password) => ({
    type: LOG_IN_REQUEST,
    payload: { username, password },
  });
  export const loginSuccess = payload => ({
    type: LOG_IN_SUCCESS,
    payload,
  });
  export const loginError = payload => ({
    type: LOG_IN_FAIL,
    payload,
  });

  export const logout = () => ({
    type: LOG_OUT,
  });
  
  