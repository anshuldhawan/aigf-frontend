import { combineReducers } from "redux";
import AdminLoginReducer from "./AdminLogin/reducer";
import UserLoginReducer from "./UserLogin/reducer";
import BotReducer from "./Bots/reducer";

const rootReducer = combineReducers({
  Admin: AdminLoginReducer,
  User: UserLoginReducer,
  Bots: BotReducer,
});

export default rootReducer;
