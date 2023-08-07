import React from "react";
import { Link } from "react-router-dom";
import ChatUser1 from '../../assets/images/avatar/1.png'
import { ChatContent } from "./ChatContent";
import { ChatFooter } from "./ChatFooter";


// import ChatUser1 from "../../assets/images/avatar/1.png";
import BackArow from '../../assets/images/arow-back.png'

export const ChatMessages = ({ show, Setshow }) => {
  const handleClick = () => {
    Setshow(!show)
  }
  return (
    <>
      <div className={`chat-body-main w-100 ${show && "active"}`}>
        <div className="chat-header d-flex justify-content-between pt-3">

          <div className="media chat-name align-items-center text-truncate d-flex gap-3">
            <div className="back-arow" onClick={handleClick}>
              <img src={BackArow} />
            </div>
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
        <ChatContent />
        <ChatFooter />
      </div>
    </>
  );
};
