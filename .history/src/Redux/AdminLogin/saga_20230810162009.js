import { put, call, takeEvery } from "redux-saga/effects";
import * as CONST from "./actionTypes";
import * as ACTION from "./actions";
import * as API from "../../Services/ApiCalls";

function* AdminLoginSaga({ payload, callBack }) {
  const response = yield call(API.ADMIN_LOGIN, payload);
  try {
    if (response.status === 200) {
      localStorage.setItem(
        "adminToken",
        response.data?.data?.stsTokenManager?.accessToken
      );
      callBack && callBack(response.data);
      yield put(ACTION.adminLogin_Success(response.data));
    } else {
      yield put(ACTION.adminLogin_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.adminLogin_Fail(response.data.error));
  }
}

function* createBotSaga({ payload, callBack }) {
  const response = yield call(API.CREATE_BOT, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.createBot_Success(response.data));
    } else {
      yield put(ACTION.createBot_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.createBot_Fail(response.data.error));
  }
}
function* getBotListSaga({ payload, callBack }) {
  const response = yield call(API.GET_BOT_LIST, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.getBotList_Success(response.data));
    } else {
      yield put(ACTION.getBotList_fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getBotList_fail(response.data.error));
  }
}
function* deleteBotSaga({ payload, callBack }) {
  const response = yield call(API.DELETE_BOT, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.deleteBot_Success(response.data));
    } else {
      yield put(ACTION.deleteBot_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.deleteBot_Fail(response.data.error));
  }
}

function* editBotSaga({ payload, callBack }) {
  const response = yield call(API.EDIT_BOT, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.editBot_success(response.data));
    } else {
      yield put(ACTION.editBot_fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.editBot_fail(response.data.error));
  }
}
function* getBotDetailsSaga({ payload, callBack }) {
  const response = yield call(API.GET_BOT_DETAILS, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.getBotDetails_success(response.data));
    } else {
      yield put(ACTION.getBotDetails_fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.getBotDetails_fail(response.data.error));
  }
}

function* uploadFileSaga({ payload, callBack }) {
  const response = yield call(API.UPLOAD_FILE, payload);
  callBack && callBack(response.data);
  try {
    if (response.status === 200) {
      yield put(ACTION.uploadFile_Success(response.data));
    } else {
      yield put(ACTION.uploadFile_Fail(response.data.error));
    }
  } catch (error) {
    yield put(ACTION.uploadFile_Fail(response.data.error));
  }
}

function* AdminSaga() {
  yield takeEvery(CONST.ADMIN_LOGIN, AdminLoginSaga);
  yield takeEvery(CONST.CREATE_BOT, createBotSaga);
  yield takeEvery(CONST.UPLOAD_FILE, uploadFileSaga);
  yield takeEvery(CONST.GET_BOT_LIST, getBotListSaga);
  yield takeEvery(CONST.DELETE_BOT, deleteBotSaga);
  yield takeEvery(CONST.EDIT_BOT, editBotSaga);
  yield takeEvery(CONST.GET_BOT_DETAILS, getBotDetailsSaga);
}

export default AdminSaga;
