import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";
import { Link } from "react-router-dom";
import { SeeProfile } from "../Components/Profile/SeeProfile";
export const Profile = () => {
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header />
          <SeeProfile />
        </div>
      </div>
    </>
  );
};
