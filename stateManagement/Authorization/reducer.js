import { actionTypes } from "./action";

export const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        login: { ...action.payload },
      };
    }
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        login: { ...action.payload },
      };

    default:
      return state;
  }
}

export default reducer;
