import { combineReducers } from "redux";
import { germanReducer } from "./germanReducer";
import { homeReducer } from "./homeReducer";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";


export const allReducers = combineReducers({
  home:homeReducer,
  user:userReducer,
  german:germanReducer,
  posts:postsReducer

})