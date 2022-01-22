import _ from "lodash";
import { actionTypes } from "./action";

export const initState = { loading: true };

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CREATE_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.CREATE_CARD_SUCCESS:
      return {
        cards: [...state.cards, { ...action.payload.card }],
        loading: false,
      };

    case actionTypes.EDIT_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.EDIT_CARD_SUCCESS: {
      // all this just to maintain the order of cards
      let currState = { ...state, loading: false };

      let index = currState.cards.findIndex(
        (card) => card._id === action.payload.savedCard._id
      );

      currState.cards[index] = _.cloneDeep(action.payload.savedCard);

      return {
        ...currState,
      };
    }

    case actionTypes.GET_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: [...action.payload.cards],
      };

    default:
      return state;
  }
}

export default reducer;
