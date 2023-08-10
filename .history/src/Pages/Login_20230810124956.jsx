import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../Redux/AdminLogin/actions";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/actions";
import ButtonLoader from "../Components/common/ButtonLoader";

export const Login = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((s) => s.User);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();

    const callback = (res) => {
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
      dispatch(userLogin(data, callback));
    }
  };
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
                    value={data?.email}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
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
                    value={data?.password}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        password: e.target.value,
                      }))
                    }
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
                {loading ? (
                  <button
                    className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                    type="submit"
                  >
                    <ButtonLoader color={"text-light"}}/>
                  </button>
                ) : (
                  <button
                    className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                    type="submit"
                    onClick={handleSignIn}
                  >
                    Sign in
                  </button>
                )}

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
