import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DummyImg from "../../assets/images/avatar/dummy.png";
import CameraImg from "../../assets/images/avatar/camera.png";
import FileUploader from "../../FileUpload/FilePreview";
import { useDispatch } from "react-redux";
import { createBot, uploadFile } from "../../Redux/actions";
import { MenuItem, Select } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Countries = [
  {
    name: "India",
    id: "India",
  },
  {
    name: "USA",
    id: "USA",
  },
  {
    name: "Russia",
    id: "Russia",
  },
  {
    name: "Germany",
    id: "Germany",
  },
  {
    name: "Nigeria",
    id: "Nigeria",
  },
];

const Attributes = [
  {
    name: "Intelligent",
    id: "Intelligent",
  },
  {
    name: "Responsive",
    id: "Responsive",
  },
  {
    name: "Very Intelligent",
    id: "Very Intelligent",
  },
  {
    name: "Very Responsive",
    id: "Very Responsive",
  },
];

export const ProfileNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { bot, botDetails, isUpdate } = useSelector((s) => s.Admin);

  const formik = useFormik({
    initialValues: {
      profileImage: "",
      name: "",
      profession: "",
      age: "",
      attributes: [],
      country: "",
      images: [],
      videos: [],
      role: "bot",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      profession: Yup.string().required("Profession is required"),
      age: Yup.number().required("Age is required"),
      attributes: Yup.array()
        .required("Array is required")
        .test("is-not-empty", "Attributes is required", (value) => {
          return value.length > 0;
        }),
      country: Yup.string().required("Country is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      const callback2 = (res) => {
        if (res?.error === false) {
          toast.success("Profile added successfully");
          navigate("/admin/profiles");
        } else {
          toast.error(res?.data?.message || "Server error");
        }
      };

      const callback = (res) => {
        const imgData = res?.data;
        const imgArray = imgData.map((item, index) => {
          return {
            url: item?.url,
            caption: item?.originalName,
          };
        });
        const data = { ...values, images: imgArray };
        dispatch(createBot(data, callback2));
      };

      let formData = new FormData();
      formData.append("folderName", "test");
      for (var i = 0; i < uploadedFiles.length; i++) {
        formData.append("files", uploadedFiles[i]);
      }
      dispatch(uploadFile(formData, callback));
    },
  });

  const handleAttributeChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "values here");
    formik.setFieldValue(name, value);
  };

  const handleProfileImg = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();

    const callBack = (res) => {
      const data = res?.data?.[0]?.url;
      formik.setFieldValue("profileImage", data);
    };
    formData.append("folderName", "test");
    formData.append("files", files);
    dispatch(uploadFile(formData, callBack));
  };

  return (
    <>
      <div className="main-layout card-bg-1 login-page addprofile-page w-100">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={12} className="col-12">
              <h1 className="font-weight-bold">Add Profile</h1>
              <div className="main-profile-upload">
                <div className="upload-img position-relative">
                  <img
                    className="main-profileimg"
                    src={formik.values?.profileImage || DummyImg}
                    alt=""
                  />
                  <img
                    className="cmra-img position-absolute"
                    src={CameraImg}
                    alt=""
                  />
                  <input type="file" onChange={handleProfileImg} />
                </div>
              </div>
              <form className="mb-3" action="#">
                <div className="form-group">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <div className="field-user d-flex gap-3 align-items-center">
                    <div className="w-100 mt-3">
                      <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        className="form-control form-control-md"
                        id="name"
                        placeholder="Enter Your Name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <span className="text-danger error">
                          {formik.errors.name}
                        </span>
                      )}
                    </div>
                    <div className="w-100 ">
                      <input
                        type="text"
                        name="profession"
                        value={formik.values.profession}
                        className="form-control mt-3 form-control-md"
                        id="profession"
                        placeholder="Profession"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.profession &&
                        formik.errors.profession && (
                          <span className="text-danger error">
                            {formik.errors.profession}
                          </span>
                        )}
                    </div>
                  </div>
                  <div className="field-user d-flex gap-3">
                    <input
                      type="number"
                      name="age"
                      value={formik.values.age}
                      className="form-control mt-3 form-control-md"
                      id="age"
                      placeholder="Age"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.age && formik.errors.age && (
                    <span className="text-danger error">
                      {formik.errors.age}
                    </span>
                  )}

                  <div className="field-user d-flex gap-3">
                    <div className="w-100">
                      <Select
                        className="demo-simple-select-label"
                        id="demo-simple-select"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        MenuProps={Countries}
                        placeholder="Country"
                        onBlur={formik.handleBlur}
                      >
                        {Countries &&
                          Countries.length > 0 &&
                          Countries.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      {formik.touched.country && formik.errors.country && (
                        <span className="text-danger error">
                          {formik.errors.country}
                        </span>
                      )}
                    </div>
                    <div className="w-100">
                      <Select
                        className="demo-simple-select-label"
                        id="demo-simple-select"
                        multiple
                        name="attributes"
                        value={formik.values.attributes}
                        onChange={handleAttributeChange}
                        MenuProps={Attributes}
                        onBlur={formik.handleBlur}
                      >
                        {Attributes &&
                          Attributes.length > 0 &&
                          Attributes.map((item, idx) => {
                            return (
                              <MenuItem key={item.id} value={item.id}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                      {formik.touched.attributes &&
                        formik.errors.attributes && (
                          <span className="text-danger error">
                            {formik.errors.attributes}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <div className="form-group descrp-profile">
                  <textarea
                    id="w3review"
                    name="description"
                    rows="4"
                    cols="50"
                    placeholder="Description"
                  ></textarea>
                </div>
                {formik.touched.descriptions && formik.errors.description && (
                  <span className="text-danger error">
                    {formik.errors.description}
                  </span>
                )}
              </form>
              <FileUploader
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
              />

              {loading ? (
                <button className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold">
                  <ButtonLoader color={"text-light"} />
                </button>
              ) : (
                <button
                  className="button-signup btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
