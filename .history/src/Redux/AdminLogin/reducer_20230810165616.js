import * as CONST from "./actionTypes";

const intialState = {
  isLogin: false,
  loading: false,
  bot: [],
  error: null,
  uploadFile: {},
  botDetails: {},
  isUpdate: false,
  fileLoader: false,
};

const AdminLoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.ADMIN_LOGIN:
      return {
        ...state,
        isLogin: true,
        loading: true,
        error: null,
      };
    case CONST.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case CONST.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CONST.CREATE_BOT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.CREATE_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        bot: payload,
        error: null,
      };
    case CONST.CREATE_BOT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    //  GET BOT LIST;

    case CONST.GET_BOT_LIST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.GET_BOT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        bot: payload,
        error: null,
      };
    case CONST.GET_BOT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    //  DELETE BOT;

    case CONST.DELETE_BOT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.DELETE_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CONST.DELETE_BOT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    //  EDIT BOT;

    case CONST.EDIT_BOT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.EDIT_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdate: false,
        error: null,
      };
    case CONST.EDIT_BOT_FAIL:
      return {
        ...state,
        loading: false,
        isUpdate: false,
        error: payload,
      };
    //  EDIT BOT;

    case CONST.GET_BOT_DETAILS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CONST.GET_BOT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        botDetails: payload,
        isUpdate: true,
        error: null,
      };
    case CONST.GET_BOT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        isUpdate: false,
        error: payload,
      };

    // UPLOAD FILE //

    case CONST.UPLOAD_FILE:
      return {
        ...state,
        fileLoader: true,
        error: null,
      };
    case CONST.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        fileLoader: false,
        uploadFile: payload,
        error: null,
      };
    case CONST.UPLOAD_FILE_FAIL:
      return {
        ...state,
        fileLoader: false,
        error: payload,
      };

    default:
      return state;

      break;
  }
};

export default AdminLoginReducer;
