import { all, fork } from 'redux-saga/effects';
import {
  takeLoginRequest
} from './auth/login';
import {
  takesignuprequest
} from './signup/signup';
import {
  takeoauthloginRequest
} from './oauth/oauth';
import {
  takeupdateRequest
} from './update/update';
import {
  takeuserRequest
} from './user/user';
import {
  takeupdatepasswordRequest
} from './update/updatepass';





function* rootSaga() {
  yield all([
    fork(takeLoginRequest),
    fork(takesignuprequest),
    fork(takeoauthloginRequest),
    fork(takeupdateRequest),
    fork(takeuserRequest),
    fork(takeupdatepasswordRequest)
  ]);
}

export { rootSaga };
