import { all } from "redux-saga/effects";
import AuthSaga from "../stateManagement/saga/authenticationSaga";
export default function* rootSaga() {
  yield all([AuthSaga()]);
}
