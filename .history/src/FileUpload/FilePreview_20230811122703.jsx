import React, { useCallback, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const FileUploader = ({ uploadedFiles, setUploadedFiles }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const allowedExtensions = ["jpg", "jpeg", "png", "svg"];
    const filteredFiles = acceptedFiles.filter((file) =>
      allowedExtensions.includes(file.name.split(".").pop().toLowerCase())
    );
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setUploadedFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (file) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const filePreviews = uploadedFiles.map((file) => (
    <Col lg={2} className="my-4">
      <div key={file.name} className="file-preview position-relative">
        <img className="img-fluid" src={file.preview || file} />
        <p>{file.name}</p>

        <button onClick={() => removeFile(file)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.2"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              class="a"
              d="m0.3 0.3q0.1-0.1 0.3-0.2 0.2-0.1 0.4-0.1 0.2 0 0.4 0.1 0.2 0.1 0.3 0.2l6.3 6.3 6.3-6.3q0.3-0.3 0.7-0.3 0.4 0 0.7 0.3 0.3 0.3 0.3 0.7 0 0.4-0.3 0.7l-6.3 6.3 6.3 6.3q0.3 0.3 0.3 0.7 0 0.4-0.3 0.7-0.3 0.3-0.7 0.3-0.4 0-0.7-0.3l-6.3-6.3-6.3 6.3q-0.3 0.3-0.7 0.3-0.4 0-0.7-0.3-0.3-0.3-0.3-0.7 0-0.4 0.3-0.7l6.3-6.3-6.3-6.3q-0.1-0.1-0.2-0.3-0.1-0.2-0.1-0.4 0-0.2 0.1-0.4 0.1-0.2 0.2-0.3z"
            />
          </svg>
        </button>
      </div>
    </Col>
  ));

  return (
    <Row>
      <Col lg="12" className="my-2 file-upload-user">
        <div class="position-relative text-center upload-file-doc upload-file d-flex align-items-center justify-content-center">
          <div
            className={`dropzone py-3 ${isDragActive ? "active" : ""}`}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnsSvgjs="http://svgjs.com/svgjs"
                  width="22"
                  height="22"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlspace="preserve"
                  class=""
                >
                  <g>
                    <path
                      d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                      fill="#2b2b2f"
                      data-original="#2b2b2f"
                      class=""
                    ></path>
                    <path
                      d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                      fill="#2b2b2f"
                      data-original="#2b2b2f"
                      class=""
                    ></path>
                  </g>
                </svg>
                <p>Drag & Drop files to upload</p>
              </>
            )}
            {/* <div className="file-previews">{filePreviews}</div> */}
          </div>
        </div>
      </Col>
      <Col lg="12">
        <Row className="">{filePreviews}</Row>
      </Col>
    </Row>
  );
};

export default FileUploader;
