import { combineReducers } from "redux";
import locations from "./location";

const rootReducer = combineReducers({
  data: locations,
});

export default rootReducer;
