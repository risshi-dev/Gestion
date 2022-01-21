export const actionTypes = {
  CREATE_PROJECT_REQUEST: "CREATE_PROJECT_REQUEST",
  CREATE_PROJECT_SUCCESS: "CREATE_PROJECT_SUCCESS",
  GET_PROJECTS_REQUEST: "GET_PROJECTS_REQUEST",
  GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
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

export function getProjects() {
  return { type: actionTypes.GET_PROJECTS_REQUEST };
}

export function getProjectsSuccess(payload) {
  return {
    type: actionTypes.GET_PROJECTS_SUCCESS,
    payload,
  };
}
