import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { userReducer } from "./userReducer";


export const allReducers = combineReducers({
  home:homeReducer,
  user:userReducer

})