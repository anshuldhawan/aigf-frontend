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

const ConfirmPopup = (props) => {
  const { show, hideModal, setConfirmDelete, unlockBots } = props;

  return (
    <Modal show={show} onHide={hideModal} className="locked-popup">
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body className="text-center">
        <div className="modalert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.com/svgjs"
            width="65"
            height="65"
            x="0"
            y="0"
            viewBox="0 0 24 24"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M14.876 2.672a3.309 3.309 0 0 0-5.752 0L.414 18.19a3.178 3.178 0 0 0 .029 3.189A3.264 3.264 0 0 0 3.29 23h17.42a3.264 3.264 0 0 0 2.847-1.621 3.178 3.178 0 0 0 .029-3.189zm6.955 17.7A1.283 1.283 0 0 1 20.71 21H3.29a1.283 1.283 0 0 1-1.121-.631 1.182 1.182 0 0 1-.011-1.2l8.71-15.519a1.355 1.355 0 0 1 2.264 0l8.71 15.518a1.182 1.182 0 0 1-.011 1.201z"
                fill="#ff337c"
                data-original="#ff337c"
              ></path>
              <path
                d="M12 7a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"
                fill="#ff337c"
                data-original="#ff337c"
              ></path>
              <circle
                cx="12"
                cy="18"
                r="1"
                fill="#ff337c"
                data-original="#ff337c"
              ></circle>
            </g>
          </svg>
        </div>
        {/* <h5 className="mb-2 mt-1 text-warning">Profile Locked</h5> */}
        <h4 className="mb-4">Do you want to unlock this bot?</h4>

        <div className="d-flex justify-content-around align-items-center">
          <button
            type="button"
            className="btn my-btn btn-primary font-weight-semibold"
            onClick={hideModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn my-btn btn-primary font-weight-semibold"
            onClick={() => unlockBots()}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const ProfilesHome = () => {
  const dispatch = useDispatch();
  const BotList = useSelector((s) => s?.User?.botList?.data);
  const userToken = localStorage.getItem("userToken");
  const [showModal, setShowModal] = useState(false);
  const [selectedBot, setSelectedBot] = useState({});

  useEffect(() => {
    dispatch(userBotList());
  }, [dispatch, userToken]);

  const unlockBots = () => {
    const callback = (res) => {
      if (res?.error === false) {
        toast.success(res?.message);
        setShowModal(false);
      } else {
        toast.error(res?.message);
      }
    };
    const data = {
      uid: selectedBot?.uid,
    };
    dispatch(unlockBot(data, callback));
  };

  const handleBot = (dta) => {
    setSelectedBot(dta);
    setShowModal(true);
  };

  return (
    <>
      <Container className="container-xl px-2 px-sm-3 main-all-homeprofiles">
        <Row className="row justify-content-center">
          {BotList &&
            BotList.length > 0 &&
            BotList.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {item?.access === "locked" && (
                    <Col lg={3} md={6} key={idx}>
                      <div
                        className="position-relative mb-30"
                        onClick={handleBot}
                      >
                        <Link className="proimg unlocked">
                          <div className="lockedImages">
                            <img className="botImg" src={item.profileImage} />
                            <img className="lock" src={Lock} />
                          </div>
                        </Link>
                      </div>
                    </Col>
                  )}
                  {item?.access === "unlocked" && (
                    <Col lg={3} md={6} key={idx}>
                      <div className="position-relative mb-30">
                        <Link
                          to={`/profile/${item.uid}`}
                          className="proimg unlocked"
                        >
                          <div className="lockedImages">
                            <img className="botImg" src={item.profileImage} />
                          </div>
                        </Link>
                      </div>
                    </Col>
                  )}
                </Fragment>
              );
            })}
        </Row>
        <ConfirmPopup
          show={showModal}
          hideModal={() => setShowModal(false)}
          unlockBots={unlockBots}
        />
      </Container>
    </>
  );
};
