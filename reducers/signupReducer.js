import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOG_OUT,
  } from '~/actions/signup/signupActionTypes';
  
  const initialState = {
    loading: false,
    success: false,
    msg: '',
    data: {},
  };
  
  export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          data: { ...action.data },
          msg: 'request_signup',
          loading: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          data: { ...action.data },
          success: true,
          msg: 'signup_success',
          loading: false,
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          data: {},
          success: false,
          msg: 'signup_fail',
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
  