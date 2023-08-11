import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* totalCreditSaga({ payload, callBack }) {
  const response = yield call(API.TOTAL_CREDITS, payload);
  try {
    if (response?.status === 200) {
      yield put(ACTION.totalCredits_Success(response?.data));
      callBack && callBack(response?.data);
    } else {
      yield put(ACTION.totalCredits_Fail(response?.data?.error));
    }
  } catch (error) {
    yield put(ACTION.totalCredits_Fail(response?.data?.error));
  }
}
function* creditListSaga({ payload, callBack }) {
  const response = yield call(API.CREDIT_LIST, payload);
  try {
    if (response?.status === 200) {
      yield put(ACTION.creditList_Success(response?.data));
      callBack && callBack(response?.data);
    } else {
      yield put(ACTION.creditList_Fail(response?.data?.error));
    }
  } catch (error) {
    yield put(ACTION.creditList_Fail(response?.data?.error));
  }
}

function* buyCreditSaga({ payload, callBack }) {
  const response = yield call(API.BUY_CREDIT, payload);
  try {
    if (response?.status === 200) {
      yield put(ACTION.buyCredit_Success(response?.data));
      callBack && callBack(response?.data);
    } else {
      const error = response?.response?.data?.message;
      toast.error(error);
      yield put(ACTION.buyCredit_Fail(response?.data?.error));
    }
  } catch (error) {
    yield put(ACTION.buyCredit_Fail(response?.data?.error));
  }
}

function* creditsSaga() {
  yield takeEvery(CONST.TOTAL_CREDITS, totalCreditSaga);
  yield takeEvery(CONST.CREDIT_LIST, creditListSaga);
  yield takeEvery(CONST.BUY_CREDIT, buyCreditSaga);
}

export default creditsSaga;
