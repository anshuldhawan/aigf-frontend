import { combineReducers } from "redux";
import AdminLoginReducer from "./AdminLogin/reducer";

const rootReducer = combineReducers({
  Admin: AdminLoginReducer,
});

export default rootReducer;
