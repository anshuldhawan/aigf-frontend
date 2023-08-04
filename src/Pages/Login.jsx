import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
export const Login = () => {
  return (
    <>
      <div className="main-layout card-bg-1 login-page">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={4} className="col-12">
              <h1 className="font-weight-bold">Sign in</h1>
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
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group d-flex justify-content-between checkbocx-login">
                <div class="form-group">
                      <input type="checkbox" id="html" />{" "}
                      <label for="html">Remember me</label>
                    </div>
                  <Link
                    className="reset-link text-decoration-none font-size-sm"
                    to="/reset-password"
                  >
                    Reset password
                  </Link>
                </div>
                <button
                  className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                  type="submit"
                >
                  Sign in
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
                Don't have an account?{" "}
                <Link className="font-weight-semibold" to="/signup">
                  Sign up
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
