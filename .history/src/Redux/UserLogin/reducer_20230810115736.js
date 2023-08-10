import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  error: null,
  signupData: {},
  loginData: {},
  botList: [],
  sendMessage: {},
  messageHistory: {},
  getBot: {},
  unlockBots: [],
  userProfile: {},
};

const UserLoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.USER_SIGNUP:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
        signupData: {},
      };
    case CONST.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signupData: payload,
        error: null,
      };
    case CONST.USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: payload?.data,
        error: null,
      };
    case CONST.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.USER_BOT_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        botList: [],
      };
    case CONST.USER_BOT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        botList: payload,
        error: null,
      };
    case CONST.USER_BOT_LIST_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.GET_BOT:
      return {
        ...state,
        loading: true,
        error: null,
        getBot: {},
      };
    case CONST.GET_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        getBot: payload,
        error: null,
      };
    case CONST.GET_BOT_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    // case CONST.UNLOCK_BOT_LIST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: null,
    //     unlockBots: [],
    //   };
    // case CONST.UNLOCK_BOT_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     unlockBots: payload,
    //     error: null,
    //   };
    // case CONST.UNLOCK_BOT_LIST_FAIL:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: payload,
    //   };

    case CONST.SEND_MESSAGE:
      return {
        ...state,
        loading: true,
        error: null,
        sendMessage: [],
      };
    case CONST.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        sendMessage: payload,
        error: null,
      };
    case CONST.SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };

    case CONST.MESSAGE_HISTORY:
      return {
        ...state,
        loading: true,
        error: null,
        messageHistory: [],
      };
    case CONST.MESSAGE_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        messageHistory: payload,
        error: null,
      };
    case CONST.MESSAGE_HISTORY_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
      };
    case CONST.GET_USER_PROFILE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userProfile: payload?.data,
      };
    case CONST.GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: true,
        error: payload,
        userProfile: {},
      };

    default:
      return state;

    // break;
  }
};

export default UserLoginReducer;
