import { combineReducers } from "redux";
import { germanBucher } from "./germanBucher";
import { germanFerienjob } from "./germanFerienjob";
import { germanReducer } from "./germanReducer";
import { germanStundeReducer } from "./germanStundeReducer";
import { germanTests6classReducer } from "./germanTests6classReducer";
import { germanTests7classReducer } from "./germanTests7Reducer";
import { germanTests8classReducer } from "./germanTests8classReducer";
import { germanTextA1Reducer } from "./germanTextA1Reducer";
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
  germanTests8class:germanTests8classReducer,
  germanTextA1Reducer:germanTextA1Reducer,
  germanStundeReducer:germanStundeReducer,
  germanFerienjob:germanFerienjob,
  germanBucher:germanBucher

})