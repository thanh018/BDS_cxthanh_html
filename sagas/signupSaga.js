import { put, race, call, delay, select, takeLatest } from 'redux-saga/effects';

// import apiTimeout  from '~/constants';
import requestSignup from './api/signup';
import es6promise from 'es6-promise';

import { SIGNUP_REQUEST, LOG_OUT } from '~/actions/signup/signupActionTypes';
import {
    singupSuccess,
    singupError,
  } from '~/actions/signup/signupActions';
import { makeSelectUserName, makeSelectPassword, makeSelectPhone } from '~/selectors/signup';
const apiTimeOut = 30000;

es6promise.polyfill();

function* getSignup() {
  const username = yield select(state => makeSelectUserName(state));
  const phone = yield select(state => makeSelectPhone(state));
  const password = yield select(state => makeSelectPassword(state));
    try {
        const options = {
          first_name: "ISER",
          last_name: "A",
          display_name: "ISER A",
          password: password,
          username: username,
          mobile_number: phone,
        };
        const { res } = yield race({
          res: call(requestSignup, options),
          timeout: delay(apiTimeOut), // timeout if data not return in x seconds
        });
        if (res && res.data) {
          const { data } = res;
          yield put(singupSuccess(data));
        }
      } catch (e) {
        yield put(singupError(e));
      }
}


export default function* () {
  yield takeLatest(SIGNUP_REQUEST, getSignup);
  yield takeLatest(LOG_OUT, getSignup);
}
