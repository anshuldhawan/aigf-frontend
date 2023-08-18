import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
import { userSignup } from "../Redux/actions";
import { isEmail, isEmpty } from "validator";
import { PASS_REGEX } from "../Services/URLS";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import ButtonLoader from "../Components/common/ButtonLoader";

export const SignUp = () => {
  const { loading } = useSelector((s) => s.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be 8 characters")
        // .max(5, "Password must be  5 characters"),
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, including uppercase letters, numbers, and symbols"
      ),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords does not match"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { confirmPassword, ...restvalue } = values;
      const callBack = (res) => {
        if (res?.error === false) {
          toast.success(res?.message);
          navigate("/login");
        } else {
          toast.error(res?.message);
        }
      };
      dispatch(userSignup(restvalue, callBack));
    },
  });

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
              <form className="mb-3">
                <div className="form-group">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="text-danger error">
                      {formik.errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-md"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-danger error">
                      {formik.errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-danger error">
                      {formik.errors.password}
                    </span>
                  )}
                </div>

                <div className="form-group confirm-form-group">
                  <label for="confirmpassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-md"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Confirm Password"
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <span className="text-danger error">
                        {formik.errors.confirmPassword}
                      </span>
                    )}
                </div>

                {loading ? (
                  <button className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold">
                    <ButtonLoader color={"text-light"} />
                  </button>
                ) : (
                  <button
                    className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                    onClick={formik.handleSubmit}
                  >
                    Sign up
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
