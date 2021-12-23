import { combineReducers } from "redux";
import loginReducer from "./Authorization/reducer";
import projectReducer from "./Project/reducer";
const rootReducer = combineReducers({ loginReducer, projectReducer });

export default rootReducer;
