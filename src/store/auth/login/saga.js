import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

import { postJwtLogin } from "../../../helpers/fakebackend_helper";

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postJwtLogin, {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history.push("/tables-gridjs");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    localStorage.removeItem("authUser");
    yield put(logoutUserSuccess(LOGOUT_USER, true));
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
