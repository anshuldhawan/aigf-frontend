import * as CONST from "./actionTypes";

export const userSignup = (payload, callBack) => {
  return {
    type: CONST.USER_SIGNUP,
    payload: payload,
    callBack,
  };
};

export const userSignup_Success = (payload) => ({
  type: CONST.USER_SIGNUP_SUCCESS,
  payload,
});

export const userSignup_Fail = (payload) => ({
  type: CONST.USER_SIGNUP_FAIL,
  payload,
});

export const userLogin = (payload, callBack) => {
  return {
    type: CONST.USER_LOGIN,
    payload: payload,
    callBack,
  };
};

export const userLogin_Success = (payload) => ({
  type: CONST.USER_LOGIN_SUCCESS,
  payload,
});

export const userLogin_Fail = (payload) => ({
  type: CONST.USER_LOGIN_FAIL,
  payload,
});

export const forgotPassword = (payload, callBack) => {
  return {
    type: CONST.FORGOT_PASSWORD,
    payload: payload,
    callBack,
  };
};

export const forgotPassword_Success = (payload) => ({
  type: CONST.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPassword_Fail = (payload) => ({
  type: CONST.FORGOT_PASSWORD_FAIL,
  payload,
});

export const selectEmail = (payload = {
  type: CONST.SELECT_EMAIL,
  payload,
});

export const userBotList = (payload, callBack) => {
  return {
    type: CONST.USER_BOT_LIST,
    payload: payload,
    callBack,
  };
};

export const userBotList_Success = (payload) => ({
  type: CONST.USER_BOT_LIST_SUCCESS,
  payload,
});

export const userBotList_Fail = (payload) => ({
  type: CONST.USER_BOT_LIST_FAIL,
  payload,
});

export const getBot = (payload, callBack) => {
  return {
    type: CONST.GET_BOT,
    payload: payload,
    callBack,
  };
};

export const getBot_Success = (payload) => ({
  type: CONST.GET_BOT_SUCCESS,
  payload,
});

export const getBot_Fail = (payload) => ({
  type: CONST.GET_BOT_FAIL,
  payload,
});

// export const unlockBotList = (payload, callBack) => {
//   return {
//     type: CONST.UNLOCK_BOT_LIST,
//     payload: payload,
//     callBack,
//   };
// };

// export const unlockBotList_Success = (payload) => ({
//   type: CONST.UNLOCK_BOT_LIST_SUCCESS,
//   payload,
// });

// export const unlockBotList_Fail = (payload) => ({
//   type: CONST.UNLOCK_BOT_LIST_FAIL,
//   payload,
// });

export const sendMessage = (payload, callBack) => {
  return {
    type: CONST.SEND_MESSAGE,
    payload: payload,
    callBack,
  };
};

export const sendMessage_Success = (payload) => ({
  type: CONST.SEND_MESSAGE_SUCCESS,
  payload,
});

export const sendMessage_Fail = (payload) => ({
  type: CONST.SEND_MESSAGE_FAIL,
  payload,
});

export const messageHistory = (payload, callBack) => {
  return {
    type: CONST.MESSAGE_HISTORY,
    payload: payload,
    callBack,
  };
};

export const messageHistory_Success = (payload) => ({
  type: CONST.MESSAGE_HISTORY_SUCCESS,
  payload,
});

export const messageHistory_Fail = (payload) => ({
  type: CONST.MESSAGE_HISTORY_FAIL,
  payload,
});

// get User Profile
export const getUserProfile = (payload, callBack) => {
  return {
    type: CONST.GET_USER_PROFILE,
    payload: payload,
    callBack,
  };
};

export const getUserProfile_Success = (payload) => ({
  type: CONST.GET_USER_PROFILE_SUCCESS,
  payload,
});

export const getUserProfile_Fail = (payload) => ({
  type: CONST.GET_USER_PROFILE_FAIL,
  payload,
});
