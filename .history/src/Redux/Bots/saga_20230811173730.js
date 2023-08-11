import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* unlockBotListSaga({ payload, callBack }) {
  const response = yield call(API.UNLOCK_BOT_LIST, payload);
  try {
    if (response?.status === 200) {
      callBack && callBack(response.data);
      yield put(ACTION.unlockBotList_Success(response?.data));
    } else {
      yield put(ACTION.unlockBotList_Fail(response?.data?.error));
    }
  } catch (error) {
    yield put(ACTION.unlockBotList_Fail(response?.data?.error));
  }
}

function* unlockBotSaga({ payload, callBack }) {
  const response = yield call(API.UNLOCK_BOT, payload);
  try {
    if (response?.status === 200) {
      callBack && callBack(response.data);
      yield put(ACTION.unlockBot_Success(response?.data));
    } else {
      yield put(ACTION.unlockBot_Fail(response?.data?.error));
    }
  } catch (error) {
    yield put(ACTION.unlockBot_Fail(response?.data?.error));
  }
}

function* UserLoginSaga() {
  yield takeEvery(CONST.UNLOCK_BOT_LIST, unlockBotListSaga);
  yield takeEvery(CONST.UNLOCK_BOT, unlockBotSaga);
}

export default UserLoginSaga;
