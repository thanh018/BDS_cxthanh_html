import { put, race, call, delay, select, takeLatest } from 'redux-saga/effects';

// import apiTimeout  from '~/constants';
import requestLogin from './api/login';
import es6promise from 'es6-promise';

import { LOG_IN_REQUEST, LOG_OUT } from '~/actions/login/loginActionTypes';
import {
    loginSuccess,
    loginError,
  } from '~/actions/login/loginActions';
import { makeSelectUserName, makeSelectPassword } from '~/selectors/login';
const apiTimeOut = 30000;

es6promise.polyfill();

function* getLogin() {
  const username = yield select(state => makeSelectUserName(state));
  const password = yield select(state => makeSelectPassword(state));
    try {
        const options = {
          username: username,
          password: password,
        };

        const { res } = yield race({
          res: call(requestLogin, options),
          timeout: delay(apiTimeOut), // timeout if data not return in x seconds
        });
        
        if (res && res.data) {
          const { data } = res;
          yield put(loginSuccess(data));
        }
      } catch (e) {
        yield put(loginError(e));
      }
}

// export default getLogin;


export default function* () {
  yield takeLatest(LOG_IN_REQUEST, getLogin);
  yield takeLatest(LOG_OUT, getLogin);
}
