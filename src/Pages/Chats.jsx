import React, { useEffect, useState } from "react";
import { ChatFooter } from "../Components/Chats/ChatFooter";
import { ChatMessages } from "../Components/Chats/ChatMessages";
import { SidebarChats } from "../Components/Chats/SidebarChats";
import { Navigation } from "../Layout/Navigation";
import { useParams } from "react-router-dom";

export const Chats = () => {
  const { botId } = useParams();
  const [show, Setshow] = useState("");
  const [botUserId, setBotUserId] = useState("");

  useEffect(() => {
    if (botId) {
      setBotUserId(botId);
    }
  }, [botId]);

  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible d-flex h-100">
          <SidebarChats
            show={show}
            Setshow={Setshow}
            botId={botUserId}
            setBotId={setBotUserId}
          />
         {botId && <ChatMessages
            show={show}
            Setshow={Setshow}
            botId={botUserId}
            setBotId={setBotUserId}
          />}
        </div>
      </div>
    </>
  );
};
