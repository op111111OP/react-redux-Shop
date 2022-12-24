import { combineReducers } from "redux";
import { authReducer } from "./aush.reducer";

export const rootReducer = combineReducers({
  authReducer,
});
