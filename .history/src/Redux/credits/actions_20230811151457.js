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

export const creditList = (payload, callBack) => {
  return {
    type: CONST.CREDIT_LIST,
    payload: payload,
    callBack,
  };
};

export const creditList_Success = (payload) => ({
  type: CONST.CREDIT_LIST_SUCCESS,
  payload,
});

export const creditList_Fail = (payload) => ({
  type: CONST.CREDIT_LIST_FAIL,
  payload,
});

export const buyCredit = (payload, callBack) => {
  return {
    type: CONST.BUY_CREDIT,
    payload: payload,
    callBack,
  };
};

export const buyCredit_Success = (payload) => ({
  type: CONST.BUY_CREDIT_SUCCESS,
  payload,
});

export const buyCredit_Fail = (payload) => ({
  type: CONST.BUY_CREDIT_FAIL,
  payload,
});
