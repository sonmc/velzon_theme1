import { all, fork } from "redux-saga/effects";
import LayoutSaga from "./layouts/saga";
import AuthSaga from "./auth/login/saga";

export default function* rootSaga() {
  yield all([fork(LayoutSaga), fork(AuthSaga)]);
}
