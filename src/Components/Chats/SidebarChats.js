import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ChatUser1 from '../../assets/images/avatar/1.png'
export const SidebarChats = () => {
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
                  <li className="contacts-item friends active">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
