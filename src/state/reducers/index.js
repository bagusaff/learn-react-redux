import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import MessageReducer from "./MessageReducer";
import AuthReducer from "./AuthReducer";

const reducers = combineReducers({
  account: AccountReducer,
  auth: AuthReducer,
  message: MessageReducer,
});

export default reducers;
