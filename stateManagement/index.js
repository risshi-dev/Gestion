import { combineReducers } from "redux";
import loginReducer from "./reducers/authenticationReducer";
const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
