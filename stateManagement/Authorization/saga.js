import { call, all, put, takeEvery } from "redux-saga/effects";
import AuthorizationRepository from "../../stateManagement/Repository/Authorization";
import { actionTypes, loginSuccess, registerSuccess } from "./action";
import { message } from "antd";
import router from "next/router";
import { WriteCookie } from "../../helper/helper";

const modalSuccessLogin = (type) => {
  message.success("Welcome back");
};

const modalSuccessRegister = (type) => {
  message.success("Welcome");
};
function* loginSaga({ payload }) {
  try {
    const response = yield call(AuthorizationRepository.loginRepo, payload);
    const { status, data } = response;

    if (status === 200) {
      yield put(loginSuccess(data));
      modalSuccessLogin("success");
      WriteCookie();
      router.push("/dashboard");
    } else {
      message.error("Wrong email or password");
    }
  } catch (err) {
    console.log(err);
  }
}

function* registerSaga({ payload }) {
  try {
    const response = yield call(AuthorizationRepository.signinRepo, payload);

    const { status, data } = response;

    if (status === 200) {
      yield put(registerSuccess(data));
      modalSuccessRegister("success");
      router.push("/dashboard");
    } else {
      message.error("Some Error occured");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
}
