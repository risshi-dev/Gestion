export const actionTypes = {
  SEND_INVITE_REQUEST: "SEND_INVITE_REQUEST",
  GET_INVITES: "GET_INVITES",
  GET_INVITES_SUCCESS: "GET_INVITES_SUCCESS",

  ACCEPT_INVITE: "ACCEPT_INVITE",
};

export function sendInvite(payload) {
  return { type: actionTypes.SEND_INVITE_REQUEST, payload };
}

export function getInvites(payload) {
  return {
    type: actionTypes.GET_INVITES,
    payload,
  };
}

export function getInvitesSuccess(payload) {
  return {
    type: actionTypes.GET_INVITES_SUCCESS,
    payload,
  };
}

export function acceptInviteUser(payload) {
  return {
    type: actionTypes.ACCEPT_INVITE,
    payload,
  };
}
