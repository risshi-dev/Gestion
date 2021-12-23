import { all } from "redux-saga/effects";
import AuthSaga from "./Authorization/saga";
export default function* rootSaga() {
  yield all([AuthSaga()]);
}
