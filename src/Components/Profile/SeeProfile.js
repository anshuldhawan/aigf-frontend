import React from "react";
<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile1 from "../../assets/images/static/static-1.jpg";
import Profile2 from "../../assets/images/static/static-2.jpg";
import Profile4 from "../../assets/images/static/static-4.jpg";
import Profile5 from "../../assets/images/static/static-5.jpg";
import Profile7 from "../../assets/images/static/static-7.jpg";
import Profile8 from "../../assets/images/static/static-8.jpg";
import Profile9 from "../../assets/images/static/static-9.jpg";
import Profile10 from "../../assets/images/static/static-10.jpg";
<<<<<<< HEAD

export const SeeProfile = () => {
  return (
    <>
      <Container className="container-xl main-all-homeprofiles see-profile-all container px-2 px-sm-3">
        <div className="myprof d-block d-lg-flex">
          <div className="myproimg">
            <img src={Profile8} />
          </div>
          <div className="prodesc">
            <h2>Profile No. One</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
            <p className="text-muted mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/chats" className="btn my-btn btn-primary">
              Chat With Me
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="position-relative">
              <div className="proimg" data-toggle="modal" data-target="#locked">
                <img src={Profile1} />
                <div className="lockedpro">
                  <i className="fas fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
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
          </div>
        </div>
      </Container>
    </>
  );
=======
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const SeeProfile = () => {
    const [Pop, setPop] = useState(false);

    const handleClose = () => setPop(false);
    const handleShow = () => setPop(true);
    return (
        <>
            <Container className="container-xl main-all-homeprofiles see-profile-all container px-2 px-sm-3">
                <div className="myprof d-block d-lg-flex">
                    <div className="myproimg">
                        <img src={Profile8} />
                    </div>
                    <div className="prodesc">
                        <h2>Profile No. One</h2>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
                        <p className="text-muted mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/chats" className="btn my-btn btn-primary">
                            Chat With Me
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="position-relative">
                            <Button className="p-0" variant="primary" onClick={handleShow}>
                                <div
                                    className="proimg"
                                    data-toggle="modal"
                                    data-target="#locked"
                                >
                                    <img src={Profile1} />
                                    <div className="lockedpro">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                </div>
                            </Button>

                            <Modal show={Pop} onHide={handleClose} className="locked-popup">
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
                                    <h4 className="mb-4">Need 1 credit to unlock</h4>

                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="btn my-btn btn-primary font-weight-semibold"
                                        >
                                            Unlock Profile
                                        </button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
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
                    </div>
                </div>
            </Container>
        </>
    );
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
};
