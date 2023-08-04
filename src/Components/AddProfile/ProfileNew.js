import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                  <div className='field-user d-flex gap-3'>
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                    <input
                    type="text"
                    className="form-control mt-3 form-control-md"
                    id="profession"
                    placeholder="Profession"
                  />
                  </div>
                  <div className='field-user d-flex gap-3'>
                     <input
                    type="number"
                    className="form-control mt-3 form-control-md"
                    id="age"
                    placeholder="Age"
                  />
                    <input
                    type="text"
                    className="form-control mt-3 form-control-md"
                    id="attribute"
                    placeholder="Attribute"
                  />
                  </div>
                  <Form.Select aria-label="Default select example" className='coutnry-admin'>
                    <option>Country</option>
                    <option value="1">Canada</option>
                    <option value="2">USA</option>
                    <option value="3">France</option>
                    <option value="4">Australia</option>
                    <option value="5">London</option>
                    <option value="6">Dubai</option>
                    <option value="7">India</option>
                    <option value="8">Qatar</option>
                  </Form.Select>
                </div>
                <div className="form-group descrp-profile">
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Description'></textarea>
             </div>

             <Button className='sbmt-user-new' variant="primary">Submit</Button>{' '}
              </form>
         
         
            </Col>
          </Row>
        </Container>
      </div>
   </>
  )
}
