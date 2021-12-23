import { actionTypes } from "./action";

export const initState = {};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projectDetails: { ...action.payload },
      };
    default:
      return state;
  }
}

export default reducer;
