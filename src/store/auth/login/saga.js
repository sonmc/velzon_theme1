import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { postJwtLogin } from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postJwtLogin, {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    localStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
