import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT,
  } from '~/actions/login/loginActionTypes';
  
  const initialState = {
    loading: false,
    success: false,
    msg: '',
    data: {},
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        return {
          ...state,
          data: { ...action.payload },
          msg: 'request_login',
          loading: true,
        };
      case LOG_IN_SUCCESS:
        return {
          ...state,
          data: { ...action.payload },
          success: true,
          msg: 'login_success',
          loading: false,
        };
      case LOG_IN_FAIL:
        return {
          ...state,
          data: { ...action.payload },
          success: false,
          msg: 'login_fail',
          loading: false,
        };
      case LOG_OUT:
        return {
          ...state,
          data: {},
          success: false,
          msg: 'logout',
          loading: false,
        };
      default:
        return state;
    }
  };
  