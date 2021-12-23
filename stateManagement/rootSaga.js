import { all } from "redux-saga/effects";
import AuthSaga from "./Authorization/saga";
import Project from "./Project/saga";
export default function* rootSaga() {
  yield all([AuthSaga(), Project()]);
}
