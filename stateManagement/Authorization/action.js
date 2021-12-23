export const actionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",

  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
};

export function loginRequest(payload) {
  return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload,
  };
}

export function registerSuccess(payload) {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload,
  };
}
