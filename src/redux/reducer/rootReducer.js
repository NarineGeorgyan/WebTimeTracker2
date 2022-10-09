import { combineReducers } from "redux";
import setUseSites from "./setUseSites";

export const rootReducer = combineReducers({
  useSites: setUseSites,
});
