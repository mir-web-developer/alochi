import { combineReducers } from "redux";
import { germanReducer } from "./germanReducer";
import { germanTests6classReducer } from "./germanTests6classReducer";
import { germanTests7classReducer } from "./germanTests7Reducer";
import { germanTests8classReducer } from "./germanTests8classReducer";
import { homeReducer } from "./homeReducer";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";


export const allReducers = combineReducers({
  home:homeReducer,
  user:userReducer,
  german:germanReducer,
  posts:postsReducer,
  germanTests6class:germanTests6classReducer,
  germanTests7class:germanTests7classReducer,
  germanTests8class:germanTests8classReducer

})