import * as CONST from "./actionTypes";

const intialState = {
  loading: false,
  error: null,
  unlockBots: [],
};

const UserLoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.UNLOCK_BOT_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        unlockBots: [],
      };
    case CONST.UNLOCK_BOT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        unlockBots: payload?.data,
        error: null,
      };
    case CONST.UNLOCK_BOT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CONST.UNLOCK_BOT:
      return {
        ...state,
        loading: true,
        error: null,
        unlockBots: [],
      };
    case CONST.UNLOCK_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CONST.UNLOCK_BOT_FAIL:
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

export default UserLoginReducer;
