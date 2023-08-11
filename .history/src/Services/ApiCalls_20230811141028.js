import Axios from "./Axios";
import * as API from "./URLS";

export const ADMIN_LOGIN = (data) => Axios.post(API.ADMIN_LOGIN, data);
export const CREATE_BOT = (data) => Axios.post(API.CREATE_BOT, data);
export const GET_BOT_LIST = (data) => Axios.post(API.GET_BOT_LIST, data);
export const DELETE_BOT = (data) => Axios.post(API.DELETE_BOT, data);
export const UPLOAD_FILE = (data) => Axios.post(API.UPLOAD_FILE, data);
export const EDIT_BOT = (data) => Axios.post(API.EDIT_BOT, data);
export const GET_BOT_DETAILS = (data) => Axios.post(API.GET_BOT_DETAILS, data);

// ================ USER ================= //

export const USER_SIGNUP = (data) => Axios.post(API.USER_SIGNUP, data);
export const USER_LOGIN = (data) => Axios.post(API.USER_LOGIN, data);

export const FORGOT_PASSWORD = (data) => Axios.post(API.FORGOT_PASSWORD, data);

export const USER_BOT_LIST = (data) => Axios.post(API.USER_BOT_LIST, data);
export const GET_BOT = (data) => Axios.post(API.GET_BOT, data);
export const UNLOCK_BOT_LIST = (data) => Axios.post(API.UNLOCK_BOT_LIST, data);
export const TOTAL_CREDITS = (data) => Axios.post(API.TOTAL_CREDITS, data);
export const CREDIT_LIST = (data) => Axios.post(API.CREDIT_LIST, data);

export const SEND_MESSAGE = (data) => Axios.post(API.SEND_MESSAGE, data);
export const MESSAGE_HISTORY = (data) => Axios.post(API.MESSAGE_HISTORY, data);

export const GET_USER_PROFILE = (data) =>
  Axios.post(API.GET_USER_PROFILE, data);

// export const VERIFY_OTP = (data) => Axios.post(API.VERIFY_OTP, data);
// export const CREATE_PASS_SUBADMIN = (data) =>
//   Axios.post(API.CREATE_PASS_SUBADMIN, data);
// export const ADMIN_DETAIL = (data) => Axios.get(API.ADMIN_DETAIL + data);
// export const ROW_SORTING = (data) => Axios.post(API.ROW_SORTING, data);
