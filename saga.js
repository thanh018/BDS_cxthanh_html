/* global fetch */

import {
    all, takeLatest
  } from 'redux-saga/effects';
  // import { LOG_IN_REQUEST } from '~/actions/login/loginActionTypes';
  import loginSaga from '~/sagas/loginSaga';
  import signupSaga from '~/sagas/signupSaga';

  function* rootSaga() {
    yield all([
      loginSaga(),
      signupSaga(),
      // takeLatest(LOG_IN_REQUEST, loginSaga),
    ]);
  }
  
  export default rootSaga;