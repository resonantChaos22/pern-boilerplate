import people from "./people-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  people,
});

export default rootReducer;
