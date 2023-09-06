import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile1 from "../../assets/images/static/static-1.jpg";
import { userBotList } from "../../Redux/actions";
import Lock from "../../assets/images/padlock.png";
import Modal from "react-bootstrap/Modal";
import { unlockBot } from "../../Redux/actions";
import { toast } from "react-toastify";
import Dummy from "../../assets/images/dummy.png";

export const ProfilesHome = () => {
  const dispatch = useDispatch();
  const BotList = useSelector((s) => s?.User?.botList?.data);
  const userToken = localStorage.getItem("userToken");
  const [showModal, setShowModal] = useState(false);
  const [selectedBot, setSelectedBot] = useState({});

  const getUserBotList = () => {
    dispatch(userBotList({page : 1 , limit : 10000}));
  };

  useEffect(() => {
    getUserBotList();
  }, [dispatch, userToken]);

  return (
    <>
      <Container className="container-xl px-2 px-sm-3 main-all-homeprofiles">
        <Row className="row justify-content-start">
          {BotList &&
            BotList.length > 0 &&
            BotList.map((item, idx) => {
              return (
                <Fragment key={idx} >
                  <Col lg={3} md={6} title={item.name} key={idx}>
                    <div className="position-relative mb-30">
                      <Link
                        to={`/profile/${item.uid}`}
                        className="proimg unlocked"
                      >
                        <div className="lockedImages">
                          <img
                            className="botImg"
                            src={item.profileImage || Dummy}
                          />
                        </div>
                      </Link>
                    </div>
                  </Col>
                </Fragment>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
