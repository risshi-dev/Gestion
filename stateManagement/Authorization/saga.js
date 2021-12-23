import { call, all, put, takeEvery } from "redux-saga/effects";
import AuthorizationRepository from "../../stateManagement/Repository/Authorization";
import { actionTypes, loginSuccess, registerSuccess } from "./action";
import { notification } from "antd";

const modalSuccessLogin = (type) => {
  notification[type]({
    message: "Welcome back",
    description: "Do your 110% ",
  });
};

const modalSuccessRegister = (type) => {
  notification[type]({
    message: "Welcome",
    description: "All in one place for management",
  });
};
function* loginSaga({ payload }) {
  try {
    const response = yield call(AuthorizationRepository.loginRepo, payload);
    const { status, data } = response;

    if (status === 200) {
      yield put(loginSuccess(data));
      modalSuccessLogin("success");
    } else {
      console.log(data);
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
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
}
