import { all, fork } from "redux-saga/effects";
import AdminSaga from "./AdminLogin/saga";

export default function* rootSaga() {
  yield all([fork(AdminSaga)]);
}
