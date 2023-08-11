export const API_URL = "https://chatwebsite-api.suffescom.dev/api/v1/";
// export const API_URL = "http://192.168.19.24:5004/api/v1/";
// export const API_URL = "http://localhost:5004/api/v1/";

// ================ ADMIN ==================== //
export const ADMIN_LOGIN = "admin/login";
export const CREATE_BOT = "admin/createBot";
export const UPLOAD_FILE = "file/upload";
export const GET_BOT_LIST = "admin/botList";
export const DELETE_BOT = "admin/deleteBot";
export const EDIT_BOT = "admin/updateBot";
export const GET_BOT_DETAILS = "admin/getBot";

// =================== USER ===================== //

export const USER_SIGNUP = "user/signup";
export const USER_LOGIN = "user/login";
export const FORGOT_PASSWORD = "user/forgetPassword";

export const USER_BOT_LIST = "user/botList";
export const GET_BOT = "user/getBot";
export const UNLOCK_BOT_LIST = "user/unlockBotList";
export const UNLOCK_BOT = "user/unlockBotList";
export const TOTAL_CREDITS = "user/getCredit";
export const CREDIT_LIST = "admin/creditList";
export const BUY_CREDIT = "user/purchaseCredit";

export const SEND_MESSAGE = "user/sendMessage";
export const MESSAGE_HISTORY = "user/messageHistory";

export const GET_USER_PROFILE = "/user/profile";

// export const STRIPE_PUBLIC_KEY = "pk_test_LLAdXVApiHYl2QUmtHy2HiHT";

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const Numeric = /^[0-9]+$/;
export const ALPHABET = /^[A-Za-z]+$/;
export const ALPHANUMERIC_REGEX = /[^a-z\d]/i;
export const PASS_VALIDATION_MSG =
  "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
