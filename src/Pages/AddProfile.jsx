import React from 'react'
import { Navigation } from '../Layout/Navigation'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DummyImg from '../assets/images/avatar/dummy.png'
import CameraImg from '../assets/images/avatar/camera.png'
import { ProfileNew } from '../Components/AddProfile/ProfileNew';

export const AddProfile = () => {
  return (
    <>
      <div className='main-layout d-flex flex-row h-100'>
        <Navigation />
        <ProfileNew />
      </div>
    </>
  )
}
