import { combineReducers } from "redux";
import loginReducer from "./Authorization/reducer";
import projectReducer from "./Project/reducer";
import cardReducer from "./Card/reducer";

const rootReducer = combineReducers({
  loginReducer,
  projectReducer,
  cardReducer,
});

export default rootReducer;
