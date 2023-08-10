import * as CONST from "./actionTypes";

const intialState = {
  loading: false,
  error: null,
  credits: {},
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
        unlockBots: payload,
        error: null,
      };
    case CONST.UNLOCK_BOT_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    default:
      return state;

    // break;
  }
};

export default UserLoginReducer;
