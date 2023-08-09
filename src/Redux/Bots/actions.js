import * as CONST from "./actionTypes";

export const unlockBotList = (payload, callBack) => {
  return {
    type: CONST.UNLOCK_BOT_LIST,
    payload: payload,
    callBack,
  };
};

export const unlockBotList_Success = (payload) => ({
  type: CONST.UNLOCK_BOT_LIST_SUCCESS,
  payload,
});

export const unlockBotList_Fail = (payload) => ({
  type: CONST.UNLOCK_BOT_LIST_FAIL,
  payload,
});
