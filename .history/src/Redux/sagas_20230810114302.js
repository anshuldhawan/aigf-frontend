import { all, fork } from "redux-saga/effects";
import AdminSaga from "./AdminLogin/saga";
import UserLoginSaga from "./UserLogin/saga";
import BotSaga from "./Bots/saga";
import CreditSaga from "./credits/saga";

export default function* rootSaga() {
  yield all([fork(AdminSaga)]);
  yield all([fork(UserLoginSaga)]);
  yield all([fork(BotSaga)]);
  yield all([fork(CreditSaga)]);
}
