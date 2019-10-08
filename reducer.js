import { combineReducers } from 'redux';
import { loginReducer } from '~/reducers/loginReducer';
import { signupReducer } from '~/reducers/signupReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
  });