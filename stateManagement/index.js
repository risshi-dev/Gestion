import { combineReducers } from "redux";
import loginReducer from "./Authorization/reducer";
const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
