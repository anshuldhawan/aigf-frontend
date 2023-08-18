import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateRole } from "../Redux/actions";

export const Header = ({ title, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(updateRole(""));
    navigate("/login");
  };
  return (
    <>
      <div class="page-main-heading sticky-top py-myhead px-3 mb-3 w-100 d-flex justify-content-between align-items-center">
        <div class="pl-xl-0">
          <h5 class="font-weight-semibold mb-1">{title}</h5>
          <p class="text-muted mb-0">{text}</p>
        </div>
        <Dropdown className="text-end icon-login-header">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i class="far fa-user-circle"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M6.41667 7.58333V1.75H7.58333V7.58333H6.41667ZM7 12.25C6.28056 12.25 5.60233 12.1116 4.96533 11.8347C4.32872 11.5574 3.77222 11.1806 3.29583 10.7042C2.81944 10.2278 2.44261 9.67128 2.16533 9.03467C1.88844 8.39767 1.75 7.71944 1.75 7C1.75 6.22222 1.91042 5.48819 2.23125 4.79792C2.55208 4.10764 3.00417 3.50972 3.5875 3.00417L4.40417 3.82083C3.9375 4.20972 3.57292 4.68125 3.31042 5.23542C3.04792 5.78958 2.91667 6.37778 2.91667 7C2.91667 8.12778 3.31528 9.09028 4.1125 9.8875C4.90972 10.6847 5.87222 11.0833 7 11.0833C8.1375 11.0833 9.10233 10.6847 9.8945 9.8875C10.6871 9.09028 11.0833 8.12778 11.0833 7C11.0833 6.37778 10.9544 5.78958 10.6966 5.23542C10.4391 4.68125 10.0722 4.20972 9.59583 3.82083L10.4125 3.00417C10.9958 3.50972 11.4479 4.10764 11.7687 4.79792C12.0896 5.48819 12.25 6.22222 12.25 7C12.25 7.71944 12.1116 8.39767 11.8347 9.03467C11.5574 9.67128 11.1831 10.2278 10.7118 10.7042C10.24 11.1806 9.68586 11.5574 9.04925 11.8347C8.41225 12.1116 7.72917 12.25 7 12.25Z"
                  fill="#FF0D0D"
                ></path>
              </svg>
              <span>Logout</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};
