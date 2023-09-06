import React from "react";
import { AllCredits } from "../Components/BuyCredits/AllCredits";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";
import Footer from "../Layout/footer";
import ReactGA from "react-ga4";

export const BuyCredits = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/buy-credits",
    title: "Buy Credits",
  });
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header
            title="Buy Credits"
            // text="Buy Credits to do something special"
          />
          <AllCredits />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};
