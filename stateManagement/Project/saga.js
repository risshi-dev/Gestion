import { all, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import { actionTypes, createProject, createProjectSuccess } from "./action";
import Project from "../Repository/Project";

const modalSuccess = (type) => {
  notification[type]({
    message: "Wellcome back",
    description: "You are login successful!",
  });
};

function* createProjectSaga({ payload }) {
  try {
    const data = yield call(Project.createProject, payload);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function* createProjectSuccessSaga() {
  try {
    yield put(logOutSuccess());
    modalWarning("warning");
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga)]);
  yield all([
    takeEvery(actionTypes.CREATE_PROJECT_SUCCESS, createProjectSuccessSaga),
  ]);
}
