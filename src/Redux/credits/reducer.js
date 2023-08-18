import * as CONST from "./actionTypes";

const intialState = {
  loading: false,
  error: null,
  credits: {},
  creditLists: [],
};

const totalCreditReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.TOTAL_CREDITS:
      return {
        ...state,
        loading: true,
        error: null,
        credits: {},
      };
    case CONST.TOTAL_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        credits: payload?.data,
        error: null,
      };
    case CONST.TOTAL_CREDITS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CONST.CREDIT_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        credits: {},
      };
    case CONST.CREDIT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        creditLists: payload?.data,
        error: null,
      };
    case CONST.CREDIT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        creditLists : [],
        error: payload,
      };
    case CONST.BUY_CREDIT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.BUY_CREDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CONST.BUY_CREDIT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
    // break;
  }
};

export default totalCreditReducer;
