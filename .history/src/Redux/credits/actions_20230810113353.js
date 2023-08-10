import * as CONST from "./actionTypes";

export const totalCredits = (payload, callBack) => {
  return {
    type: CONST.TOTAL_CREDITS,
    payload: payload,
    callBack,
  };
};

export const totalCredits_Success = (payload) => ({
  type: CONST.TOTAL_CREDITS_SUCCESS,
  payload,
});

export const totalCredits_Fail = (payload) => ({
  type: CONST.TOTAL_CREDITS_FAIL,
  payload,
});
