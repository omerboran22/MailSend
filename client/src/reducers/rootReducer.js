import { combineReducers } from "redux";
import customerReducer from "./customer";

const rootReducer=combineReducers({
  customers:customerReducer,
})

export default rootReducer;









