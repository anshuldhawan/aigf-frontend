import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
export const SignUp = () => {
  return (
    <>
      <div className="main-layout card-bg-1 login-page signup-page">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={4} className="col-12">
              <h1 className="font-weight-bold">Sign Up</h1>
              <p className="text-dark mb-3">
                We are Different, We Make You Different.
              </p>
              <form className="mb-3" action="#">
                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-md"
                    id="email"
                    value="nairottheme@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group confirm-form-group">
                  <label for="confirmpassword" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                  type="submit"
                >
                  Sign up
                </button>
                <div className="or-text text-center py-2 text-white">OR</div>
                <Link to="/">
                <button
                  className=" google-login-btn btn btn-outline-primary btn-lg btn-block text-uppercase font-weight-semibold"
                  type="submit"
                >
                  <img
                    src={GoogleImg}
                    width="18"
                    className="align-middle mr-2 d-inline-block"
                  />
                  Sign in With Google
                </button>
                </Link>
              </form>

              <p className="dont-text">
              Already have an account? {" "}
                <Link className="font-weight-semibold" to="/login">
                  Sign up
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
