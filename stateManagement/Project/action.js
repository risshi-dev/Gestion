export const actionTypes = {
  CREATE_PROJECT_REQUEST: "CREATE_PROJECT_REQUEST",
  CREATE_PROJECT_SUCCESS: "CREATE_PROJECT_SUCCESS",
  GET_PROJECTS_REQUEST: "GET_PROJECTS_REQUEST",
  GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
  GET_TEAM_MEMBERS: "GET_TEAM_MEMBERS",
  GET_TEAM_MEMBERS_SUCCESS: "GET_TEAM_MEMBERS_SUCCESS",

  DELETE_PROJECT: "DELETE_PROJECT",
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

export function getTeam(payload) {
  return {
    type: actionTypes.GET_TEAM_MEMBERS,
    payload,
  };
}

export function getTeamSuccess(payload) {
  return {
    type: actionTypes.GET_TEAM_MEMBERS_SUCCESS,
    payload,
  };
}

export function deleteProject(payload) {
  return {
    type: actionTypes.DELETE_PROJECT,
    payload,
  };
}
