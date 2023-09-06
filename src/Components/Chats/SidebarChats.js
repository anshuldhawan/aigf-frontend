import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ChatUser1 from "../../assets/images/avatar/1.png";
import DummyImg from "../../assets/images/avatar/dummy.png";
import { useDispatch, useSelector } from "react-redux";
import { unlockBotList } from "../../Redux/actions";
import moment from "moment";

export const SidebarChats = ({ show, Setshow, botId, setBotId }) => {
  const dispatch = useDispatch();
  const { unlockBots, loading } = useSelector((s) => s.Bots);

  useEffect(() => {
    dispatch(unlockBotList());
  }, [dispatch]);

  const handleClick = () => {
    Setshow(!show);
  };
  return (
    <>
      <aside className="sidebar">
        <div className="tab-content">
          <div className="tab-pane active" id="chats">
            <div className="d-flex flex-column h-100">
              <div className="hide-scrollbar h-100" id="chatContactsList">
                <ul
                  className="contacts-list pt-1"
                  id="chatContactTab"
                  data-chat-list=""
                >
                  {unlockBots &&
                    unlockBots.length > 0 &&
                    unlockBots.map((item) => {
                      return (
                        <li
                          onClick={handleClick}
                          className={`contacts-item friends ${
                            botId === item.uid ? "active" : ""
                          }`}
                        >
                          <Link
                            className="contacts-link"
                            to={`/chats/${item.uid}`}
                            onClick={() => setBotId(item.uid)}
                          >
                            <div className="avatar avatar-online chat-without-bg">
                              <img src={item.profileImage || DummyImg} alt="" />
                            </div>
                            <div className="contacts-content">
                              <div className="contacts-info">
                                <h6 className="chat-name text-truncate">
                                  {item.name}
                                </h6>
                                <div className="chat-time">
                                  {moment(item?.lastMessageTime)
                                    .format("hh:mm a")}
                                </div>
                              </div>
                              <div className="contacts-texts">
                                <p className="text-truncate">
                                  {item?.lastMessage}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}

                  {/* <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-offline bg-name text-light">
                        <span>HA</span>
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name">Hans Auger</h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="javascript:;">
                      <div className="avatar avatar-online chat-without-bg">
                        <img src={ChatUser1} alt="" />
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name text-truncate">
                            David Alcantara
                          </h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-offline bg-name text-light">
                        <span>HA</span>
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name">Hans Auger</h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-online chat-without-bg">
                        <img src={ChatUser1} alt="" />
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name text-truncate">
                            David Alcantara
                          </h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-offline bg-name text-light">
                        <span>HA</span>
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name">Hans Auger</h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-online chat-without-bg">
                        <img src={ChatUser1} alt="" />
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name text-truncate">
                            David Alcantara
                          </h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="contacts-item friends">
                    <Link className="contacts-link" to="#">
                      <div className="avatar avatar-offline bg-name text-light">
                        <span>HA</span>
                      </div>
                      <div className="contacts-content">
                        <div className="contacts-info">
                          <h6 className="chat-name">Hans Auger</h6>
                          <div className="chat-time">00:00 am</div>
                        </div>
                        <div className="contacts-texts">
                          <p className="text-truncate">
                            lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
