import { combineReducers } from "redux";
import loginReducer from "./Authorization/reducer";
import projectReducer from "./Project/reducer";
import cardReducer from "./Card/reducer";
import inviteReducer from "./Invites/reducer";

const rootReducer = combineReducers({
  loginReducer,
  projectReducer,
  cardReducer,
  inviteReducer,
});

export default rootReducer;
