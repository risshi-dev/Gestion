import { all, put, call, takeEvery } from "redux-saga/effects";
import { notification, message } from "antd";

import { actionTypes, getInvitesSuccess } from "./action";

import Invite from "../Repository/Invite";

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

function* inviteProjectSaga({ payload }) {
  try {
    const response = yield call(Invite.sendInvite, payload);
    // //console.log(response);
    const { status } = response;

    if (status === 200) {
      message.success("Invite Sent Successfully");
    }
  } catch (err) {
    message.warning(err.response.data.message);
    //console.log(err.response);
  }
}

function* getInvites({ payload }) {
  try {
    const response = yield call(Invite.getInvites, payload);

    const { status, data } = response;
    // //console.log(data.invites.invitesReceived);
    if (status === 200) {
      yield put(getInvitesSuccess(data.invites.invitesReceived));
      // modalSuccess("Invite Sent Successfully");
    }
  } catch (err) {
    //console.log(err.response);
  }
}

function* acceptInvite({ payload }) {
  try {
    const response = yield call(Invite.acceptInvite, payload);

    const { status, data } = response;
    // //console.log(data);
    if (status === 200) {
      if (data === "Invite Rejected") message.warning("Invite Rejected");
      else message.success("Invite Accepted");
    }
  } catch (err) {
    //console.log(err.response);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.SEND_INVITE_REQUEST, inviteProjectSaga)]);
  yield all([takeEvery(actionTypes.ACCEPT_INVITE, acceptInvite)]);
  yield all([takeEvery(actionTypes.GET_INVITES, getInvites)]);
}
