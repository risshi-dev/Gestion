import { all } from "redux-saga/effects";
import AuthSaga from "./Authorization/saga";
import Project from "./Project/saga";
import Card from "./Card/saga";
import Invite from "./Invites/saga";
export default function* rootSaga() {
  yield all([AuthSaga(), Project(), Card(), Invite()]);
}
