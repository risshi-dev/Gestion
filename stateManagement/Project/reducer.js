import { actionTypes } from "./action";

export const initState = {
  loading: false,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        ...{ loading: false },
      };
    case actionTypes.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        ...{ loading: true },
      };
    default:
      return state;
  }
}

export default reducer;
