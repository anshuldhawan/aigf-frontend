<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { adminLogin } from "../Redux/AdminLogin/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSignIn = () => {
    const callback = (res) => {
      console.log(res);
      if (res.error === false) {
        toast.success("Login Successfully");
        navigate("/");
      } else {
        toast.error("Invalid credentails");
      }
    };
    if (!data?.email) {
      toast.warning("Email is required");
    } else if (!data?.password) {
      toast.warning("Password is required");
    } else {
      dispatch(adminLogin(data, callback));
    }
  };
=======
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
export const Login = () => {
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
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
<<<<<<< HEAD
                    value={data?.email}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
=======
                    value="nairottheme@gmail.com"
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
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
<<<<<<< HEAD
                    value={data?.password}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        password: e.target.value,
                      }))
                    }
=======
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group d-flex justify-content-between checkbocx-login">
<<<<<<< HEAD
                  <div class="form-group">
                    <input type="checkbox" id="html" />{" "}
                    <label for="html">Remember me</label>
                  </div>
=======
                <div class="form-group">
                      <input type="checkbox" id="html" />{" "}
                      <label for="html">Remember me</label>
                    </div>
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
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
<<<<<<< HEAD
                  onClick={handleSignIn}
=======
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
                >
                  Sign in
                </button>
                <div className="or-text text-center py-2 text-white">OR</div>
                <Link to="/">
<<<<<<< HEAD
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
=======
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
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
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
