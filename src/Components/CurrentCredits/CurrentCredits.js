import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, totalCredits } from "../../Redux/actions";

export const CurrentCredits = () => {
  const { userProfile } = useSelector((s) => s.User);
  const dispatch = useDispatch();
  const getUserDetails = () => {
    dispatch(getUserProfile());
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <Container className="total-credit">
        <Row className="justify-content-center">
          <Col
            lg={6}
            className="myprof d-block text-center mx-2 all-credits-box"
          >
            <div className="mb-3 text-white">Total Credits</div>
            <h1 className="mb-4 font-weight-semibold">
              {userProfile?.credit || 0}
            </h1>
            <Link to="/buy-credits" className="btn my-btn btn-primary w-100">
              Buy More Credits
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
