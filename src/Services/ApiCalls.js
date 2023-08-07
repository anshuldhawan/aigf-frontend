import Axios from "./Axios";
import * as API from "./URLS";

export const ADMIN_LOGIN = (data) => Axios.post(API.ADMIN_LOGIN, data);
export const CREATE_BOT = (data) => Axios.post(API.CREATE_BOT, data);
export const GET_BOT_LIST = (data) => Axios.post(API.GET_BOT_LIST, data);
export const DELETE_BOT = (data) => Axios.post(API.DELETE_BOT, data);
export const UPLOAD_FILE = (data) => Axios.post(API.UPLOAD_FILE, data);
export const EDIT_BOT = (data) => Axios.post(API.EDIT_BOT, data);
export const GET_BOT_DETAILS = (data) => Axios.post(API.GET_BOT_DETAILS, data);

// export const VERIFY_OTP = (data) => Axios.post(API.VERIFY_OTP, data);
// export const CREATE_PASS_SUBADMIN = (data) =>
//   Axios.post(API.CREATE_PASS_SUBADMIN, data);
// export const ADMIN_DETAIL = (data) => Axios.get(API.ADMIN_DETAIL + data);
// export const ROW_SORTING = (data) => Axios.post(API.ROW_SORTING, data);
