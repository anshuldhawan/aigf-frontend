import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";
import { toast } from "react-toastify";

function* UserSignupSaga({ payload, callBack }) {
  const response = yield call(API.USER_SIGNUP, payload);
  callBack && callBack(response.data);
  try {
    if (response.data.status === 200) {
      yield put(ACTION.userSignup_Success(response.data));
    } else {
      yield put(ACTION.userSignup_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.userSignup_Fail(response.data.error));
  }
}

function* UserloginSaga({ payload, callBack }) {
  const response = yield call(API.USER_LOGIN, payload);
  console.log(
    "🚀 ~ file: saga.js:22 ~ function*UserloginSaga ~ response:",
    response
  );

  try {
    if (response.data.status === 200) {
      yield put(ACTION.userLogin_Success(response.data));
      localStorage.setItem(
        "userToken",
        response.data?.data?.stsTokenManager?.accessToken
      );
      localStorage.setItem("userUid", response?.data?.uid);
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.userLogin_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.userLogin_Fail(response.data.error));
  }
}

function* UserBotListSaga({ payload, callBack }) {
  const response = yield call(API.USER_BOT_LIST, payload);

  try {
    if (response.status === 200) {
      yield put(ACTION.userBotList_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.userBotList_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.userBotList_Fail(response.data.error));
  }
}

function* getBotSaga({ payload, callBack }) {
  const response = yield call(API.GET_BOT, payload);

  try {
    if (response.status === 200) {
      yield put(ACTION.getBot_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.getBot_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getBot_Fail(response.data.error));
  }
}

function* sendMessageSaga({ payload, callBack }) {
  const response = yield call(API.SEND_MESSAGE, payload);

  try {
    if (response.data.status === 200) {
      yield put(ACTION.sendMessage_Success(response.data));
      callBack && callBack(response.data);
    } else {
      yield put(ACTION.sendMessage_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.sendMessage_Fail(response.data.error));
  }
}

function* messageHistorySaga({ payload, callBack }) {
  const response = yield call(API.MESSAGE_HISTORY, payload);
  console.log(response, response.data.error === false, "message response");
  try {
    if (response.data.error === false) {
      yield put(ACTION.messageHistory_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      yield put(ACTION.messageHistory_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.messageHistory_Fail(response.data.error));
  }
}
function* getUserProfileSaga({ payload, callBack }) {
  const response = yield call(API.GET_USER_PROFILE, payload);
  try {
    if (response.data.error === false) {
      yield put(ACTION.getUserProfile_Success(response.data));
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
      yield put(ACTION.getUserProfile_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getUserProfile_Fail(response.data.error));
  }
}

// function* unlockBotListSaga({ payload, callBack }) {
//   const response = yield call(API.UNLOCK_BOT_LIST, payload);

//   try {
//     if (response.status === 200) {
//       yield put(ACTION.unlockBotList_Success(response.data));
//       callBack && callBack(response.data);
//     } else {
//       yield put(ACTION.unlockBotList_Fail(response.data.error));
//     }
//   } catch (error) {
//     yield put(ACTION.unlockBotList_Fail(response.data.error));
//   }
// }

function* UserLoginSaga() {
  yield takeEvery(CONST.USER_SIGNUP, UserSignupSaga);
  yield takeEvery(CONST.USER_LOGIN, UserloginSaga);
  yield takeEvery(CONST.USER_BOT_LIST, UserBotListSaga);
  yield takeEvery(CONST.GET_BOT, getBotSaga);
  yield takeEvery(CONST.SEND_MESSAGE, sendMessageSaga);
  yield takeEvery(CONST.MESSAGE_HISTORY, messageHistorySaga);
  yield takeEvery(CONST.GET_USER_PROFILE, getUserProfileSaga);

  // yield takeEvery(CONST.UNLOCK_BOT_LIST, unlockBotListSaga);
}

export default UserLoginSaga;
