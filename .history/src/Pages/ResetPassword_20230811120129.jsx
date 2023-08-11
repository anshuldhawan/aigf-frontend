import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((s) => s.User);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
    }),
    onSubmit: (values, { resetForm }) => {
      const callback = (res) => {
        if (res.error === false) {
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      };
      dispatch(userLogin(values, callback));
    },
  });
  return (
    <>
      <div className="main-layout card-bg-1 login-page reset-page">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={4} className="col-12">
              <h1 className="font-weight-bold">Password Reset</h1>
              <p className="text-dark mb-3">
                Enter your email address to reset password.
              </p>
              <form className="mb-3" action="#">
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

                <button
                  className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </form>

              <p className="dont-text">
                I remember my password{" "}
                <Link className="font-weight-semibold" to="/login">
                  Sign in
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
