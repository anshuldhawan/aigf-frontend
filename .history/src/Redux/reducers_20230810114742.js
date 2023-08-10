import { combineReducers } from "redux";
import AdminLoginReducer from "./AdminLogin/reducer";
import UserLoginReducer from "./UserLogin/reducer";
import BotReducer from "./Bots/reducer";
import CreditReducer from "./credits/reducer";

const rootReducer = combineReducers({
  Admin: AdminLoginReducer,
  User: UserLoginReducer,
  Bots: BotReducer,
  Credit: CreditReducer,
});

export default rootReducer;
