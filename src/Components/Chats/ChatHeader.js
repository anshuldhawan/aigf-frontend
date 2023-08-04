import React from "react";
import { Link } from "react-router-dom";
import ChatUser1 from '../../assets/images/avatar/1.png'
export const ChatHeader = () => {
  return (
    <>
      <div className="chat-header d-flex justify-content-between pt-3">
        <button
          className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none"
          type="button"
          data-close=""
        >
          <svg
            className="hw-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>

        <div className="media chat-name align-items-center text-truncate d-flex gap-3">
          <div className="avatar avatar-online chat-without-bg d-none d-sm-inline-block mr-3">
            <img src={ChatUser1} alt="" />
          </div>

          <Link to="profile.html" className="media-body align-self-center ">
            <h6 className="text-truncate mb-0">David Alcantara</h6>
            <small className="text-muted">Online</small>
          </Link>
        </div>

        <ul className="nav flex-nowrap">
          <li className="nav-item list-inline-item">
            <Link to="profile.html" className="btn btn-primary">
              See Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
