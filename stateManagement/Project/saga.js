import { all, put, call, takeEvery } from "redux-saga/effects";
import { message, notification } from "antd";

import {
  actionTypes,
  createProjectSuccess,
  getProjectsSuccess,
  getTeamSuccess,
} from "./action";
import Project from "../Repository/Project";

const modalSuccess = (type) => {
  notification[type]({
    message: "Project Created",
    description: "Now Easily Manage Your Project",
  });
};

const modalError = (type, message) => {
  notification[type]({
    message: "Duplicate project name",
    description: message,
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
    //console.log(err.response);
    modalError("error", "Cannot create projects with same name");
    // modalError("error", err.response);
  }
}

function* getProjectsSaga() {
  try {
    const response = yield call(Project.getProjects);

    const { status, data } = response;
    //console.log(response);
    if (status === 200) {
      yield put(getProjectsSuccess(data));
    }
  } catch (err) {
    //console.log(err);
  }
}

function* getTeamSaga({ payload }) {
  try {
    const response = yield call(Project.getTeam, payload);

    const { status, data } = response;
    //console.log(data.teamMembers);
    if (status === 200) {
      yield put(getTeamSuccess(data.teamMembers));
    }
  } catch (err) {
    //console.log(err);
  }
}

function* deleteProjectSaga({ payload }) {
  try {
    console.log(payload);
    const response = yield call(Project.deleteProject, payload);

    const { status, data } = response;
    //console.log(data.teamMembers);
    if (status === 200) {
      message.success("Project deleted successfully");
      //  yield put(getTeamSuccess(data.teamMembers));
    }
  } catch (err) {
    message.error("Cannot Delete other projects");
    //console.log(err);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.CREATE_PROJECT_REQUEST, createProjectSaga)]);
  yield all([takeEvery(actionTypes.GET_PROJECTS_REQUEST, getProjectsSaga)]);
  yield all([takeEvery(actionTypes.GET_TEAM_MEMBERS, getTeamSaga)]);
  yield all([takeEvery(actionTypes.DELETE_PROJECT, deleteProjectSaga)]);
}
