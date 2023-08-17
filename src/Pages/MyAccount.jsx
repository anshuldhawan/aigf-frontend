import React, { useEffect } from "react";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../Redux/actions";

export const MyAccount = () => {
  const { userProfile } = useSelector((s) => s.User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserDetails = () => {
    dispatch(getUserProfile());
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header />

          <Container className="container-xl px-2 px-sm-3 my-account-page">
            <div className="myprof d-block pt-4 pt-md-5 pb-4 pb-md-5">
              <div className="row mb-3 mb-md-2 text-white">
                <div className="col-md-6 text-md-right mb-1 mb-md-0">
                  Full Name :
                </div>
                <div className="col-md-6 font-weight-semibold">
                  {userProfile?.name}
                </div>
              </div>
              <div className="row mb-3 mb-md-2 text-white">
                <div className="col-md-6 text-md-right mb-1 mb-md-0">
                  Email Address :
                </div>
                <div className="col-md-6 font-weight-semibold">
                  {userProfile?.email}
                </div>
              </div>
              <div className="row mb-3 mb-md-2 pt-1 text-white align-items-center">
                <div className="col-md-6 text-md-right mb-1 mb-md-0">
                  Total Credit :
                </div>
                <div className="col-md-6 font-weight-semibold align-self-center last-b-mrg">
                  <span className="align-middle">{userProfile?.credit}</span>{" "}
                  <Link
                    to="/buy-credits"
                    className="btn btn-sm btn-primary align-middle ml-2"
                  >
                    Buy More Credits
                  </Link>
                </div>
              </div>

              <div className="text-center mt-5 logout-btn pt-5">
                <div
                  onClick={handleLogout}
                  className="btn my-btn btn-danger px-5"
                >
                  Log Out
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
