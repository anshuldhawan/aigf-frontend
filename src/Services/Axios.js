import axios from "axios";
import { API_URL, API_VERSION, API_TOKEN } from "./URLS";
import { toast } from "react-toastify";

const adminToken = localStorage.getItem("adminToken");
const userToken = localStorage.getItem("userToken");

class Axios {
  defaultOptions = () => {
    if (typeof window === "undefined") {
      return {
        baseURL: `${API_URL}`,
        headers: {
          token: "",
          customerid: "",
        },
      };
    }
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");

    return {
      baseURL: `${API_URL}`,
      headers: {
        Authorization: adminToken
          ? "Bearer" + " " + adminToken
          : "Bearer" + " " + userToken,
        // adminid: (localStorage && localStorage.getItem("_id")) || "",
      },
    };
  };

  LogoutUser = (res) => {
    toast.error(res.message);
    localStorage.clear();
    setTimeout(() => {
      window.location.replace("/login");
    }, 500);
  };

  get = (url, options = {}) => {
    return axios
      .get(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  post = (url, data, options = {}) => {
    return axios
      .post(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  put = (url, data, options = {}) => {
    return axios
      .put(url, data, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };

  delete = (url, options = {}) => {
    return axios
      .delete(url, { ...this.defaultOptions(), ...options })
      .then((res) => {
        if (res.data.message && res.data.message.includes("Not Authorized")) {
          let err = {
            response: {
              status: 401,
            },
          };
          this.LogoutUser(err);
        } else {
          return res;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.LogoutUser(err);
          return err;
        } else {
          return err;
        }
      });
  };
}

export default new Axios();
