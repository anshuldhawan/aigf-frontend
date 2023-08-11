import * as CONST from "./actionTypes";

export const updateRole = (payload, callBack) => {
  return {
    type: CONST.UPDATE_ROLE,
    payload: payload,
    callBack,
  };
};

export const adminLogin = (payload, callBack) => {
  return {
    type: CONST.ADMIN_LOGIN,
    payload: payload,
    callBack,
  };
};

export const adminLogin_Success = (payload) => ({
  type: CONST.ADMIN_LOGIN_SUCCESS,
  payload,
});

export const adminLogin_Fail = (payload) => ({
  type: CONST.ADMIN_LOGIN_FAIL,
  payload,
});

export const adminLogout = () => ({
  type: CONST.ADMIN_LOGOUT,
});

export const createBot = (payload, callBack) => {
  return {
    type: CONST.CREATE_BOT,
    payload: payload,
    callBack,
  };
};

export const createBot_Success = (payload) => ({
  type: CONST.CREATE_BOT_SUCCESS,
  payload,
});

export const createBot_Fail = (payload) => ({
  type: CONST.CREATE_BOT_FAIL,
  payload,
});

export const getBotList = (payload, callBack) => {
  return {
    type: CONST.GET_BOT_LIST,
    payload: payload,
    callBack,
  };
};

export const getBotList_Success = (payload) => ({
  type: CONST.GET_BOT_LIST_SUCCESS,
  payload,
});

export const getBotList_fail = (payload) => ({
  type: CONST.GET_BOT_LIST_FAIL,
  payload,
});

export const deleteBot = (payload, callBack) => {
  return {
    type: CONST.DELETE_BOT,
    payload: payload,
    callBack,
  };
};

export const deleteBot_Success = (payload) => ({
  type: CONST.DELETE_BOT_SUCCESS,
  payload,
});

export const deleteBot_Fail = (payload) => ({
  type: CONST.DELETE_BOT_FAIL,
  payload,
});

export const editBot = (payload, callBack) => {
  return {
    type: CONST.EDIT_BOT,
    payload: payload,
    callBack,
  };
};

export const editBot_success = (payload) => ({
  type: CONST.EDIT_BOT_SUCCESS,
  payload,
});

export const editBot_fail = (payload) => ({
  type: CONST.EDIT_BOT_FAIL,
  payload,
});

export const getBotDetails = (payload, callBack) => {
  return {
    type: CONST.GET_BOT_DETAILS,
    payload: payload,
    callBack,
  };
};

export const getBotDetails_success = (payload) => ({
  type: CONST.GET_BOT_DETAILS_SUCCESS,
  payload,
});

export const getBotDetails_fail = (payload) => ({
  type: CONST.GET_BOT_DETAILS_FAIL,
  payload,
});

export const uploadFile = (payload, callBack) => {
  return {
    type: CONST.UPLOAD_FILE,
    payload: payload,
    callBack,
  };
};

export const uploadFile_Success = (payload) => ({
  type: CONST.UPLOAD_FILE_SUCCESS,
  payload,
});

export const uploadFile_Fail = (payload) => ({
  type: CONST.UPLOAD_FILE_FAIL,
  payload,
});
