import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatUser1 from "../../assets/images/avatar/1.png";
import { ChatContent } from "./ChatContent";
import { ChatFooter } from "./ChatFooter";
import DummyImg from "../../assets/images/avatar/dummy.png";
// import ChatUser1 from "../../assets/images/avatar/1.png";
import BackArow from "../../assets/images/arow-back.png";
import { useDispatch, useSelector } from "react-redux";
import { getBot, messageHistory } from "../../Redux/actions";

export const ChatMessages = ({ show, Setshow, botId }) => {
  const dispatch = useDispatch();
  const [messageState, setMessaegState] = useState([]);
  console.log(
    "🚀 ~ file: ChatMessages.js:15 ~ ChatMessages ~ messageState:",
    messageState
  );
  const BotData = useSelector((s) => s?.User?.getBot?.data);
  const Messages = useSelector((s) => s?.User?.messageHistory?.data);

  useEffect(() => {
    if (Messages) {
      setMessaegState(Messages);
    }
  }, [Messages]);
  useEffect(() => {
    if (botId) {
      dispatch(getBot({ uid: botId }));
      dispatch(messageHistory({ uid: botId }));
    }
  }, [botId]);

  const handleClick = () => {
    Setshow(!show);
  };
  return (
    <>
      <div className={`chat-body-main w-100 ${show && "active"}`}>
        <div className="chat-header d-flex justify-content-between pt-3">
          <div className="media chat-name align-items-center text-truncate d-flex gap-3">
            <div className="back-arow" onClick={handleClick}>
              <img src={BackArow} />
            </div>
            <div className="avatar avatar-online chat-without-bg d-none d-sm-inline-block mr-3">
              <img src={BotData?.profileImage || DummyImg} alt="" />
            </div>

            <Link to="#" className="media-body align-self-center ">
              <h6 className="text-truncate mb-0">{BotData?.name}</h6>
              <small className="text-muted">Online</small>
            </Link>
          </div>

          <ul className="nav flex-nowrap">
            <li className="nav-item list-inline-item">
              <Link to="#" className="btn btn-primary">
                See Profile
              </Link>
            </li>
          </ul>
        </div>
        <ChatContent
          Messages={messageState}
          setMessaegState={setMessaegState}
          BotData={BotData}
        />
        <ChatFooter setMessaegState={setMessaegState} BotData={BotData} />
      </div>
    </>
  );
};
