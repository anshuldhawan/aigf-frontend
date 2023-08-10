import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
import { userSignup } from "../Redux/actions";
import { isEmail, isEmpty } from "validator";
import { PASS_REGEX } from "../Services/URLS";
import { toast } from "react-toastify";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "email": {
        if (isEmpty(value)) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (!isEmail(value)) {
          Error[name] = "Invalid Email";

          Error["disabled"] = true;
        } else {
          Error[name] = "";
          Error["disabled"] = true;
        }
        break;
      }

      case "password":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (!PASS_REGEX.test(value)) {
          Error[name] =
            "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "confirmPassword":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else if (value !== data.password) {
          Error[name] = "Confirm password must match with password";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      default:
        break;
    }
    setData((pre) => ({ ...pre, [name]: value }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let body = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    const callBack = (res) => {
      if (res.status === 200) {
        toast.success(res.message);
        navigate("/login");
      } else {
      }
    };

    dispatch(userSignup(body, callBack));
  };
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
              <form className="mb-3" action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                  />
                </div>
                <span>{errors.name}</span>
                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-md"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                </div>
                <span>{errors.email}</span>
                <div className="form-group">
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="password"
                    name="password"
                    value={data.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                </div>
                <span>{errors.password}</span>
                <div className="form-group confirm-form-group">
                  <label for="confirmpassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    id="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                </div>
                <span>{errors.confirmPassword}</span>
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
                Already have an account?{" "}
                <Link className="font-weight-semibold" to="/login">
                  Sign In
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
