import React, { useEffect, useState } from "react";
import { Navigation } from "../Layout/Navigation";
import { Container, Row, Col, Button } from "react-bootstrap";
import { generatePath, Link } from "react-router-dom";
import PrflImgUsr from "../assets/images/new-user-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteBot, getBotDetails, getBotList } from "../Redux/actions";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AdminHeader } from "../Layout/AdminHeader";

const ConfirmPopup = (props) => {
  const { show, hideModal, setConfirmDelete, deleteSelectedBot } = props;

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
        <h4 className="mb-4">Are you sure you want to delete?</h4>

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
            onClick={() => deleteSelectedBot()}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const AdminProfiles = () => {
  const { bot } = useSelector((s) => s.Admin);
  const reducer = useSelector((s) => s);
  const botList = Object.keys(bot).length !== 0 ? bot?.data : [];
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedBot, setSelectedBot] = useState({});
  const navigate = useNavigate();

  const { user } = useSelector((s) => s.Admin);
  console.log(user, "ddd");

  const getBotLists = () => {
    const data = {
      limit: 10,
      page: 1,
    };
    dispatch(getBotList(data));
  };
  useEffect(() => {
    if (adminToken) {
      getBotLists();
    }
  }, [adminToken]);

  const handleEditBot = (dta) => {
    const path = generatePath("/edit-profile/:uid", { uid: dta?.uid });
    window.location.href = path;
  };

  const handleDeleteBot = (dta) => {
    setShowModal(true);
    setSelectedBot(dta);
  };

  const deleteSelectedBot = () => {
    const callback = (res) => {
      setSelectedBot({});
      setShowModal(false);
      if (res.error === false) {
        toast.success("Profile delete successfully");
        const data = {
          limit: 10,
          page: 1,
        };
        dispatch(getBotList(data));
      } else {
        toast.error("Server error");
      }
    };
    const data = {
      uid: selectedBot?.uid,
    };
    dispatch(deleteBot(data, callback));
  };

  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home listing-new-users main-visible position-relative">
          <AdminHeader />
          <div className="icon-profile-user position-absolute">
            <Link to="/admin/add-profile">
              <Button>Add New Profile</Button>
            </Link>
          </div>
          <Container className="list-container-user h-100">
            <Row>
              <Col md={12}>
                <div className="table-listing-user d-flex flex-column justify-content-center align-items-center h-100">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Profile Image</th>
                          <th>Name</th>
                          <th>Profession</th>
                          <th>Age</th>
                          <th>Country</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(botList) &&
                          botList.length !== 0 &&
                          botList?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="img-user">
                                  <img src={item?.profileImage || PrflImgUsr} />
                                </td>
                                <td>{item?.name}</td>
                                <td>{item?.profession}</td>
                                <td>{item?.age}</td>
                                <td>{item?.country}</td>
                                <td>
                                  <div className="icon-edit-table">
                                    {/* <Link>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                width="15"
                                height="15"
                                x="0"
                                y="0"
                                viewBox="0 0 488.85 488.85"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                xmlSpace="preserve"
                                className=""
                              >
                                <g>
                                  <path
                                    d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                    fill="#000000"
                                    data-original="#000000"
                                    className=""
                                  ></path>
                                </g>
                              </svg>
                            </Link> */}
                                    <Link onClick={() => handleDeleteBot(item)}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                        width="15"
                                        height="15"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 408.483 408.483"
                                        style={{
                                          enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className="ms-2"
                                      >
                                        <g>
                                          <path
                                            d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                            fill="#000000"
                                            data-original="#000000"
                                            className=""
                                          ></path>
                                        </g>
                                      </svg>
                                    </Link>
                                    <Link onClick={() => handleEditBot(item)}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                        width="15"
                                        height="15"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 492.493 492"
                                        style={{
                                          enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                        className="ms-2"
                                      >
                                        <g>
                                          <path
                                            d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                            fill="#000000"
                                            data-original="#000000"
                                            className=""
                                          ></path>
                                        </g>
                                      </svg>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <ConfirmPopup
          show={showModal}
          hideModal={() => setShowModal(false)}
          setConfirmDelete={setConfirmDelete}
          deleteSelectedBot={deleteSelectedBot}
        />
      </div>
    </>
  );
};

// nvm use 14 && npm start
