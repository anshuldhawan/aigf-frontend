import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleImg from "../../src/assets/images/google.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, updateRole } from "../Redux/AdminLogin/actions";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonLoader from "../Components/common/ButtonLoader";

export const AdminLogin = () => {
  const { loading } = useSelector((s) => s.Admin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const callback = (res) => {
        if (res.error === false) {
          toast.success("Login Successfully");
          navigate("/admin/profiles");
          dispatch(updateRole("admin"));
        } else {
          toast.error(res?.message);
        }
      };
      dispatch(adminLogin(values, callback));
    },
  });

  return (
    <>
      <div className="main-layout card-bg-1 login-page">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={4} className="col-12">
              <h1 className="font-weight-bold">Sign in</h1>
              {/* <p className="text-dark mb-3">
                We are Different, We Make You Different.
              </p> */}
              <form className="mb-3">
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-danger error">
                      {formik.errors.password}
                    </span>
                  )}
                </div>
                <div className="form-group d-flex justify-content-between checkbocx-login">
                  <div class="form-group">
                    <input type="checkbox" id="html" />{" "}
                    <label for="html">Remember me</label>
                  </div>
                  {/* <Link
                    className="reset-link text-decoration-none font-size-sm"
                    to="/reset-password"
                  >
                    Reset password
                  </Link> */}
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
                    Sign in
                  </button>
                )}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
