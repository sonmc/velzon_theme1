import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";
import Login from "./auth/login/reducer";

const rootReducer = combineReducers({
  Layout,
  Login,
});

export default rootReducer;
