export const actionTypes = {
  CREATE_PROJECT_REQUEST: "CREATE_PROJECT_REQUEST",
  CREATE_PROJECT_SUCCESS: "CREATE_PROJECT_SUCCESS",
};

export function createProject(payload) {
  return { type: actionTypes.CREATE_PROJECT_REQUEST, payload };
}

export function createProjectSuccess(payload) {
  return {
    type: actionTypes.CREATE_PROJECT_SUCCESS,
    payload,
  };
}
