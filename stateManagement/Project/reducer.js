import { actionTypes } from "./action";

export const initState = { loading: true };

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_PROJECT_SUCCESS:
      return {
        projects: [...state.projects, { ...action.payload.project }],
        loading: false,
      };

    case actionTypes.GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
