import { all, fork } from "redux-saga/effects";
import LayoutSaga from "./layouts/saga";
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";

export default function* rootSaga() {
  yield all([fork(LayoutSaga), fork(AccountSaga), fork(AuthSaga), fork(ForgetSaga)]);
}
