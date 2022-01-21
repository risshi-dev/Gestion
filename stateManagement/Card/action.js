export const actionTypes = {
  GET_CARDS_REQUEST: "GET_CARDS_REQUEST",
  GET_CARDS_SUCCESS: "GET_CARDS_SUCCESS",
  CREATE_CARD_REQUEST: "CREATE_CARD_REQUEST",
  CREATE_CARD_SUCCESS: "GET_CARD_SUCCESS",
  EDIT_CARD_REQUEST: "EDIT_CARD_REQUEST",
  EDIT_CARD_SUCCESS: "EDIT_CARD_SUCCESS",
};

export function createCard(payload) {
  return { type: actionTypes.CREATE_CARD_REQUEST, payload };
}

export function createCardSuccess(payload) {
  return {
    type: actionTypes.CREATE_CARD_SUCCESS,
    payload,
  };
}

export function getCards(payload) {
  return { type: actionTypes.GET_CARDS_REQUEST, payload };
}

export function getCardsSuccess(payload) {
  return {
    type: actionTypes.GET_CARDS_SUCCESS,
    payload,
  };
}

export function editCard(payload) {
  return { type: actionTypes.EDIT_CARD_REQUEST, payload };
}

export function editCardSuccess(payload) {
  return {
    type: actionTypes.EDIT_CARD_SUCCESS,
    payload,
  };
}
