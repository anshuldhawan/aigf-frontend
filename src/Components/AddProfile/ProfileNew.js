import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DummyImg from '../../assets/images/avatar/dummy.png'
import CameraImg from '../../assets/images/avatar/camera.png'
export const ProfileNew = () => {
  return (
   <>
   <div className="main-layout card-bg-1 login-page addprofile-page w-100">
        <Container className="container d-flex flex-column">
          <Row className="row no-gutters text-center align-items-center justify-content-center min-vh-100">
            <Col md={6} lg={5} xl={4} className="col-12">
              <h1 className="font-weight-bold">Add Profile</h1>
              <div className="main-profile-upload">
                <div className='upload-img position-relative'>
                    <img className='main-profileimg' src={DummyImg} />
                    <img className='cmra-img position-absolute' src={CameraImg} />
                     <input type="file"/>
                </div>
             </div>
              <form className="mb-3" action="#">
                <div className="form-group">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group descrp-profile">
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Description'></textarea>
             </div>
              </form>
         
         
            </Col>
          </Row>
        </Container>
      </div>
   </>
  )
}
