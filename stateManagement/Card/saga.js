import { all, put, call, takeEvery } from "redux-saga/effects";
import { notification } from "antd";
import {
  actionTypes,
  createCardSuccess,
  editCardSuccess,
  getCardsSuccess,
} from "./action";
import Card from "../Repository/Card";

const modalError = (message) => {
  notification["error"]({
    message: message,
  });
};

function* createCardSaga({ payload }) {
  try {
    const response = yield call(Card.createCard, payload);

    const { status, data } = response;

    if (status === 200) {
      yield put(createCardSuccess(data));
    }
  } catch (err) {
    console.log(err.respones);
    modalError(err.response.data.message);
  }
}

function* getCardsSaga({ payload }) {
  try {
    const response = yield call(Card.getCards, payload);

    const { status, data } = response;

    if (status === 200) {
      yield put(getCardsSuccess(data));
    }
  } catch (err) {
    console.log(err.respones);
    modalError(err.response.data.message);
  }
}

function* editCardSaga({ payload }) {
  try {
    const response = yield call(Card.editCard, payload);

    const { status, data } = response;

    if (status === 200) {
      yield put(editCardSuccess(data));
    }
  } catch (err) {
    console.log(err.respones);
    modalError(err.response.data.message);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.CREATE_CARD_REQUEST, createCardSaga)]);
  yield all([takeEvery(actionTypes.GET_CARDS_REQUEST, getCardsSaga)]);
  yield all([takeEvery(actionTypes.EDIT_CARD_REQUEST, editCardSaga)]);
}
