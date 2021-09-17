import { combineReducers } from "redux";
import codeReducer from "./code.reducer";
import layoutReducer from "./layout.reducer";

const rootReducer = combineReducers({
  code: codeReducer,
  layout: layoutReducer,
});

export default rootReducer;
