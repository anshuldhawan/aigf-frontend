import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* unlockBotListSaga({ payload, callBack }) {
  const response = yield call(API.UNLOCK_BOT_LIST, payload);
  console.log(response, "repossss");
  try {
    if (response.status === 200) {
      yield put(ACTION.unlockBotList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.unlockBotList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.unlockBotList_Fail(response.data.error));
  }
}

function* UserLoginSaga() {
  yield takeEvery(CONST.UNLOCK_BOT_LIST, unlockBotListSaga);
}

export default UserLoginSaga;
