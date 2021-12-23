import { all, put, call, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import { actionTypes, createProjectSuccess } from "./action";
import Project from "../Repository/Project";

const modalSuccess = (type) => {
  notification[type]({
    message: "Project Created",
    description: "Now Easily Manage Your Project",
  });
};

function* createProjectSaga({ payload }) {
  try {
    const response = yield call(Project.createProject, payload);

    const { status, data } = response;

    if (status === 200) {
      yield put(createProjectSuccess(data));
      modalSuccess("success");
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga)]);
}
