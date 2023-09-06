import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Profile1 from "../../assets/images/static/static-1.jpg";
// import Profile2 from "../../assets/images/static/static-2.jpg";
// import Profile4 from "../../assets/images/static/static-4.jpg";
// import Profile5 from "../../assets/images/static/static-5.jpg";
// import Profile7 from "../../assets/images/static/static-7.jpg";
// import Profile8 from "../../assets/images/static/static-8.jpg";
// import Profile9 from "../../assets/images/static/static-9.jpg";
// import Profile10 from "../../assets/images/static/static-10.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getBot, unlockBot } from "../../Redux/actions";
import Modal from "react-bootstrap/Modal";
import DummyImages from "../../assets/images/dummy.png";
import { toast } from "react-toastify";
import ReactGA from "react-ga4";
import firebase from "firebase/app";
import "firebase/analytics";

const ConfirmPopup = (props) => {
  const { show, hideModal, unlockBots } = props;

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
        <h5 className="mb-2 mt-1 text-warning">Profile Locked</h5>
        <h4 className="mb-4">Need 1 credit to unlock ?</h4>

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

export const SeeProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { botId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const botData = useSelector((s) => s?.User?.getBot?.data);

  useEffect(() => {
    if (botId) {
      dispatch(getBot({ uid: botId }));
    }
  }, [botId]);

  const handleAnalytic = (params) => {
    firebase.analytics().logEvent(params, {
      button_name: "pay_button",
    });
  };

  const unlockBots = () => {
    handleAnalytic("Unlock_Bot_Initiated");
    const callback = (res) => {
      if (res?.data?.error === false) {
        toast.success(res?.data?.message);
        handleAnalytic("Unlock_Bot_Success");
        setShowModal(false);
        dispatch(getBot({ uid: botId }));
      } else {
        setShowModal(false);
        handleAnalytic("Unlock_Bot_Failed");
        toast.error(res?.data?.message);
      }
      if (
        res.response &&
        res?.response?.data?.message === "Insufficient Credit Balance!"
      ) {
        setTimeout(() => {
          navigate("/buy-credits");
        }, 200);
      }
    };
    const data = {
      uid: botId,
    };
    dispatch(unlockBot(data, callback));
  };

  const handleBot = (dta) => {
    setShowModal(true);
    ReactGA.event({
      category: "UNLOCK",
      action: "profile-unlock",
      label: "Profile Unlock",
    });
  };
  return (
    <>
      <Container className="container-xl main-all-homeprofiles see-profile-all container px-2 px-sm-3">
        <div className="myprof bio-wrap d-block d-lg-flex">
          <div className="myproimg">
            <img src={botData?.profileImage || DummyImages} />
          </div>
          <div className="prodesc">
            <h2 class="bio-name">{botData?.name}</h2>

            <h2>
              <span>Age : </span>
              {botData?.age}
            </h2>
            <h2>
              <span>Country : </span> {botData?.country}
            </h2>
            <h2>
              <span>Attributes : </span> {botData?.attributes}
            </h2>
            <h2>
              <span>Profession : </span> {botData?.profession}
            </h2>
            <h2>
              <span>About Me : </span> {botData?.description}
            </h2>
            {/* <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5> */}
            {/* <p className="text-muted mb-3">{botData?.description}</p> */}
            {botData?.access === "unlocked" && (
              <Link to={`/chats/${botId}`} className="btn my-btn btn-primary">
                Chat With Me
              </Link>
            )}
            {botData?.access === "locked" && (
              <Link className="btn my-btn btn-primary" onClick={handleBot}>
                Chat With Me
              </Link>
            )}
          </div>
        </div>

        <div className="row related-image-profile">
          {botData &&
            botData?.images?.length > 0 &&
            botData?.images.map((item) => {
              return (
                <div
                  className="col-lg-3 col-md-6"
                  onClick={
                    botData?.access === "locked" ? handleBot : console.log("")
                  }
                >
                  <div className="position-relative">
                    <div
                      className={`${botData?.access === "locked" && "proimg"}`}
                      data-toggle="modal"
                      data-target="#locked"
                      // onClick={handleBot}
                    >
                      <img src={item.url} />
                      {botData?.access === "locked" && (
                        <div className="lockedpro">
                          <i className="fas fa-lock"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          {/* <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile2} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile10} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile4} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile5} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile9} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile7} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile8} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <ConfirmPopup
          show={showModal}
          hideModal={() => setShowModal(false)}
          unlockBots={unlockBots}
        />
      </Container>
    </>
  );
};
