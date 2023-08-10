import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* totalCreditSaga({ payload, callBack }) {
  const response = yield call(API.UNLOCK_BOT_LIST, payload);
  try {
    if (response.status === 200) {
      yield put(ACTION.totalCredits_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.totalCredits_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.totalCredits_Fail(response.data.error));
  }
}

function* totalCreditSaga() {
  yield takeEvery(CONST.TOTAL_CREDITS, totalCreditSaga);
}

export default totalCreditSaga;
