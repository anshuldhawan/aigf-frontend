import React from "react";
import { Link } from "react-router-dom";
import ChatUser1 from '../../assets/images/avatar/1.png'
import { ChatContent } from "./ChatContent";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
export const ChatMessages = () => {
  return (
    <>
      <div className="chat-body-main w-100">
     <ChatHeader/>
     <ChatContent/>
     <ChatFooter/>
      </div>
    </>
  );
};
