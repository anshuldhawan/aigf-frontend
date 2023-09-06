import React from "react";
import { ProfilesHome } from "../Components/Home/ProfilesHome";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";
import Footer from "../Layout/footer";
import ReactGA from "react-ga4";

export const Home = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/home",
    title: "Home",
  });
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header title="Home" text="" />
          <ProfilesHome />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};
