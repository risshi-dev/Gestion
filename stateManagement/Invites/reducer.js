import { actionTypes } from "./action";

export const initState = { loading: true };

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_INVITES_SUCCESS:
      return {
        invites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
